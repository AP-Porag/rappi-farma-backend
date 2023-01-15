<?php

namespace App\Http\Controllers\Api\Admin\Setting;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function saveSettings(Request $request)
    {

        //dd($request->all());
        $settings = [
            'site_title'     => $request->site_title,
            'site_email'     => $request->site_email,
            'site_contact'     => $request->site_contact,
            'site_address'     => $request->site_address,
            'site_facebook_link'     => $request->site_facebook_link,
            'site_instagram_link'     => $request->site_instagram_link,
            'site_twitter_link'     => $request->site_twitter_link,
            'site_logo'   => $request->logoImageFileName,
            'site_favicon'   => $request->faviconImageFileName,
            'website_login_bg'   => $request->websiteLoginFileName,
            'website_registration_bg'   => $request->websiteRegistrationFileName,
            'website_customer_profile_bg'   => $request->websiteCustomerProfileBgFileName,
            'admin_product_sku'   => $request->admin_product_sku,
            'admin_order_sku'   => $request->admin_order_sku,
            'admin_shipping_charge'   => $request->admin_shipping_charge,
            'admin_twilio_order_message'   => $request->admin_twilio_order_message,
            'admin_estimated_delivery_time'   => $request->admin_estimated_delivery_time,
            'admin_login_bg'   => $request->adminLoginFileName,
        ];

        //dd($request->all());
        if ($request->logoImageFile != 'null'){
            //logo
            $file = $request->file('logoImageFile');
            $name = 'logo_' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', '/'.Setting::FILE_STORE_PATH.'/'.$name);
            $settings['site_logo'] = $name;
        }

        if ($request->faviconImageFile != 'null'){
            //favicon
            $file = $request->file('faviconImageFile');
            $name = 'favicon_' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', '/'.Setting::FILE_STORE_PATH.'/'.$name);
            $settings['site_favicon'] = $name;
        }

        if ($request->websiteLoginFile != 'null'){
            //favicon
            $file = $request->file('websiteLoginFile');
            $name = 'website_login_bg_' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', '/'.Setting::FILE_STORE_PATH.'/'.$name);
            $settings['website_login_bg'] = $name;
        }

        if ($request->websiteRegistrationFile != 'null'){
            //favicon
            $file = $request->file('websiteRegistrationFile');
            $name = 'website_registration_bg_' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', '/'.Setting::FILE_STORE_PATH.'/'.$name);
            $settings['website_registration_bg'] = $name;
        }
        if ($request->websiteCustomerProfileBgFile != 'null'){
            //favicon
            $file = $request->file('websiteCustomerProfileBgFile');
            $name = 'website_customer_profile_bg_' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', '/'.Setting::FILE_STORE_PATH.'/'.$name);
            $settings['website_customer_profile_bg'] = $name;
        }
        if ($request->adminLoginFile != 'null'){
            //favicon
            $file = $request->file('adminLoginFile');
            $name = 'admin_login_bg_' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', '/'.Setting::FILE_STORE_PATH.'/'.$name);
            $settings['admin_login_bg'] = $name;
        }

        foreach ($settings as $key => $setting) {
            Setting::updateOrCreate(
                [
                    'key' => $key,
                ],
                [
                    'value' => $setting,
                ]
            );
        }
        return response()->json(['status'=>200,'message'=>'Record updated successfully']);
    }

    public function getAllSettings()
    {
        $items = Setting::all();
        $settings = [];
        foreach ($items as $item){
            if ($item->key === 'site_logo' || $item->key === 'site_favicon'){
                $settings[$item->key] = get_storage_image(Setting::FILE_STORE_PATH, $item->value, 'setting');
            }else{
                $settings[$item->key] = $item->value;
            }

        }

        //return $settings;
        $data = [
            "settings"=>$settings,
        ];
        //return $data;

        return response()->json(['status'=>200,'data'=>$data]);
    }

}
