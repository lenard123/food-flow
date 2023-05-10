<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        return [
            'today_sales' => $this->getTodaySales(),
            'yesterday_sales' => $this->getYesterdaySales(),
            'week_sales' => $this->getSalesOfLast7Days(),
            'all_time_sales' => $this->getAllTimeSales(),
            'top_products' => $this->getTopProducts(),
            'chart_data' => $this->getChartData(),
        ];
    }

    private function getTodaySales()
    {
        $expiration = Carbon::now()->diffInSeconds(Carbon::now()->endOfDay());

        return Cache::remember('today_sales', $expiration, function () {
            return $this->getSalesOfDay(Carbon::now());
        });
    }

    private function getYesterdaySales()
    {
        $expiration = Carbon::now()->diffInSeconds(Carbon::now()->endOfDay());

        return Cache::remember('yesterday_sales', $expiration, function () {
            return $this->getSalesOfDay(Carbon::now()->yesterday());
        });
    }

    private function getSalesOfLast7Days()
    {
        $expiration = Carbon::now()->diffInSeconds(Carbon::now()->endOfDay());

        return Cache::remember('seven_day_sales', $expiration, function () {
            return DB::scalar("SELECT SUM(price * quantity) FROM orders inner join orders_items on orders.id = orders_items.order_id WHERE DATE(created_at) >= Date(?);", [Carbon::now()->subDays(7)]);
        });
    }



    private function getAllTimeSales()
    {
        $expiration = Carbon::now()->diffInSeconds(Carbon::now()->endOfDay());

        return Cache::remember('all_time_sales', $expiration, function () {
            return DB::scalar("SELECT SUM(price * quantity) FROM orders inner join orders_items on orders.id = orders_items.order_id");
        });
    }

    private function getSalesOfDay($date)
    {
        return DB::scalar("SELECT SUM(price * quantity) FROM orders inner join orders_items on orders.id = orders_items.order_id WHERE DATE(created_at) = Date(?);", [$date]);
    }

    private function getTopProducts()
    {
        $expiration = Carbon::now()->diffInSeconds(Carbon::now()->endOfDay());
        return Cache::remember('top_products', $expiration, function () {
            return DB::select("SELECT 
                                    products.id,
                                    products.name,
                                    SUM(orders_items.price * orders_items.quantity) as sale
                                FROM products
                                LEFT JOIN orders_items on products.id = orders_items.product_id
                                LEFT join orders on orders.id = orders_items.order_id
                                WHERE orders.status = 'completed'
                                GROUP BY products.id
                                ORDER by sale DESC
                                LIMIT 5");
        });
    }

    public function getChartData()
    {
        $topProducts = collect($this->getTopProducts())->pluck('id')->toArray();
        $result = collect(DB::select("SELECT 
            products.id,
            products.name,
            Date(orders.created_at) as transaction_date,
            SUM(orders_items.price * orders_items.quantity) as sale
            FROM products 
            left join orders_items on products.id = orders_items.product_id
            inner join orders on orders.id = orders_items.order_id
            where orders.status = 'completed'
            AND products.id in (". implode("," , $topProducts) .")
            group by transaction_date, product_id
            order by transaction_date, sale"));

        $labels = collect([]);
        $start_date = Carbon::parse($result->first()->transaction_date);
        $last_date = Carbon::parse($result->last()->transaction_date);
        while ($start_date <= $last_date) {
            $labels->add($start_date->format("Y-m-d"));
            $start_date->addDay();
        }
        $data = $result->groupBy('id');
        
        return compact('start_date', 'last_date', 'data', 'labels');
    }
}
