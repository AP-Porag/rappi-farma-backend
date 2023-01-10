<?php

namespace App\Http\Controllers\Api\Admin\Setting;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function saveSettings(Request $request)
    {
        $settings =  $request->all();

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
            if ($item->key != 'thumbnail_image'){
                $settings[$item->key] = $item->value;
            }else{
                $settings[$item->key] = get_storage_image(Setting::FILE_STORE_THUMB_PATH, $item->value, 'normal');
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
