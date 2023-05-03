<?php

namespace App\Http\Controllers\API;

use App\Events\OrderCreated;
use App\Events\OrderStatusUpdated;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'items' => 'required|array',
            'items.*.product_id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|numeric|min:0',
        ]);
        

        return DB::transaction(function () use ($request) {
            $order = Order::create([
                'today_id' => Order::getTodayOrdersCount() + 1,
                'user_id' => Auth::id()
            ]);

            foreach($request->items as $item) {
                $product = Product::find($item['product_id']);
                $order->items()->attach($product->id, [
                    'quantity' => $item['quantity'],
                    'price' => $product->price
                ]);
            }

            event(new OrderCreated($order));

            return $order;
        });
    }

    public function update(Request $request, Order $order)
    {
        $this->validate($request, [
            'status' => 'required'
        ]);

        $order->status = $request->status;
        $order->save();

        event(new OrderStatusUpdated($order->id, $request->status));

        return $order->load('items');
    }

    public function index()
    {
        return Order::with('items')->get();
    }
}
