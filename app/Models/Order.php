<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    const STATUS_PENDING = 'pending';
    const STATUS_PREPARING = 'preparing';
    const STATUS_CANCELLED = 'cancelled';
    const STATUS_COMPLETED = 'completed';

    protected $fillable = ['today_id', 'user_id'];

    public function items()
    {
        return $this->belongsToMany(Product::class, 'orders_items');
    }

    public static function getTodayOrdersCount()
    {
        return self::whereDate('created_at', Carbon::today())->count();
    }
}
