<?php
namespace App\Channels;

use Illuminate\Notifications\Notification;
use Twilio\Rest\Client;

class WhatsAppChannel
{
    public function send($notifiable, Notification $notification)
    {
        $message = $notification->toWhatsApp($notifiable);


        $to = $notifiable->routeNotificationFor('WhatsApp');
        //$from = config('services.twilio.whatsapp_from');
        $from = env('TWILIO_WHATSAPP_FROM');
        $message=$message->content;

        $whatsapp = send_whatsapp_message($to,$from,$message);

        return $whatsapp;
    }
}
