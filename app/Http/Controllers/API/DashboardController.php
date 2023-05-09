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
}
