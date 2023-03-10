<?php

namespace App\Notifications;

use App\Channels\Messages\WhatsAppMessage;
use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\Channels\WhatsAppChannel;


class OrderProcessed extends Notification
{
    use Queueable;


    public $order;

    public function __construct(Order $order)
    {
        $this->order = $order;
    }

    public function via($notifiable)
    {
        return [WhatsAppChannel::class];
    }

    public function toWhatsApp($notifiable)
    {
        $orderUrl = url("/orders/{$this->order->id}");
        $company = config('settings.site_title');
        $order_sku = $this->order->SKU;
        $status = 'placed';
        $deliveryDate = $this->order->created_at->addDays(config('settings.admin_estimated_delivery_time'))->toFormattedDateString();
        //$message = config('settings.admin_twilio_order_message');

        return (new WhatsAppMessage)
            ->content("Your order number # {$order_sku} has {$status} and should be delivered on {$deliveryDate}. Thanks, {$company}");
    }
}
