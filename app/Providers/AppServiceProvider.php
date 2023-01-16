<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        try {
            $settings = Cache::remember('global_settings', 3600, function () {
//                return Setting::all([
//                    'key', 'value',
//                ])->keyBy('key')
//                    ->transform(function ($setting) {
//                        return $setting->value;
//                    })
//                    ->toArray();

                $items = Setting::all();
                $settings = [];
                foreach ($items as $item){
                    if (
                        $item->key === 'site_logo' ||
                        $item->key === 'site_favicon' ||
                        $item->key === 'website_login_bg' ||
                        $item->key === 'website_registration_bg' ||
                        $item->key === 'website_customer_profile_bg' ||
                        $item->key === 'admin_login_bg'
                    ){
                        $settings[$item->key] = get_storage_image(Setting::FILE_STORE_PATH, $item->value, 'setting');
                    }else{
                        $settings[$item->key] = $item->value;
                    }

                }
                return $settings;
            });
            config([
                'settings' => $settings,
            ]);
        } catch (\Exception $exception) {
            Log::debug('App service provider boot method config error: =>' . $exception->getMessage());
        }

    }
}
