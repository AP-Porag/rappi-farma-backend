<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $settings = [
            [
                'key'   => 'site_title',
                'value' => 'Rappi Farma',
            ],
            [
                'key'   => 'site_email',
                'value' => 'rappifarma@mail.com',
            ],
            [
                'key'   => 'site_contact',
                'value' => '+00812345678',
            ],
            [
                'key'   => 'site_address',
                'value' => 'Florida',
            ],
            [
                'key'   => 'site_facebook_link',
                'value' => 'www.facebook.com',
            ],
            [
                'key'   => 'site_instagram_link',
                'value' => 'www.instagram.com',
            ],
            [
                'key'   => 'site_twitter_link',
                'value' => 'www.twitter.com',
            ],
            [
                'key'   => 'site_logo',
                'value' => 'default_logo.svg',
            ],
            [
                'key'   => 'site_favicon',
                'value' => 'default_favicon.png',
            ],
            [
                'key'   => 'website_login_bg',
                'value' => 'default_website_login_bg.svg',
            ],
            [
                'key'   => 'website_registration_bg',
                'value' => 'default_website_registration_bg.svg',
            ],
            [
                'key'   => 'website_customer_profile_bg',
                'value' => 'default_customer_profile_bg.png',
            ],
            [
                'key'   => 'admin_stock_sku',
                'value' => '7732330000',
            ],
            [
                'key'   => 'admin_order_sku',
                'value' => '3322440000',
            ],
            [
                'key'   => 'admin_shipping_charge',
                'value' => '0',
            ],
            [
                'key'   => 'admin_estimated_delivery_time',
                'value' => '5',
            ],
            [
                'key'   => 'admin_twilio_order_message',
                'value' => 'Your order of # {$order_sku} has placed and should be delivered on {$deliveryDate}.Thanks, {$company}',
            ],
            [
                'key'   => 'admin_login_bg',
                'value' => 'default_admin_login_bg.jpg',
            ],
        ];

        foreach ($settings as $setting) {
            Setting::create($setting);
        }

    }
}
