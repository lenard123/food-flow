<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    const STATUS_PENDING = 'pending';
    const STATUS_PREPARING = 'preparing';
    const STATUS_CANCELLED = 'cancelled';
    const STATUS_COMPLETED = 'completed';
}
