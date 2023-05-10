<?php

namespace App\Providers;

use App\Events\OrderCompleted;
use App\Events\OrderStatusUpdated;
use App\Models\Order;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        Event::listen(function(OrderStatusUpdated $event) {
            if ($event->status === Order::STATUS_COMPLETED) {
                event(new OrderCompleted());
            }
        });

        Event::listen(function (OrderCompleted $event) {
            Cache::forget('today_sales');
            Cache::forget('all_time_sales');
            Cache::forget('seven_day_sales');
            Cache::forget('top_products');
        });
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
