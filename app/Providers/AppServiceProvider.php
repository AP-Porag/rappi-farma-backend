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
                return Setting::all([
                    'key', 'value',
                ])->keyBy('key')
                    ->transform(function ($setting) {
                        return $setting->value;
                    })
                    ->toArray();
            });
            config([
                'settings' => $settings,
            ]);
        } catch (\Exception $exception) {
            Log::debug('App service provider boot method config error: =>' . $exception->getMessage());
        }

    }
}
