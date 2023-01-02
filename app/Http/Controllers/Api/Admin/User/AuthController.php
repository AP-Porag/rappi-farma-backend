<?php

namespace App\Http\Controllers\Api\Admin\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email','password');

        try {
            if (Auth::attempt($credentials)){

                $user = Auth::user();
                $data['fullName'] = $user->full_name;
                $data['username'] = $user->username;
                $data['email'] = $user->email;
                $data['phone'] = $user->phone;
                $data['gender'] = $user->gender;
                $data['date_of_birth'] = custom_date($user->date_of_birth);
                $data['user_type'] = $user->user_type;
                $data['avatar_url'] = $user->avatar_url;
                $data['token'] = $user->createToken('API TOKEN')-> plainTextToken;


                return response()->json(['data'=>$data],200);
            }else{
                return response()->json(['message'=>'Wrong credentials !'],200);
            }
        }catch (\Throwable $throwable){

            return response()->json([
                'status' => false,
                'message' => $throwable->getMessage()
            ], 500);

        }
    }

    public function logout()
    {
        //dd('hello ddd');
        if (Auth::check()) {
            Auth::user()->AauthAcessToken()->delete();
        }

        return response()->json([
            'status' => 200,
            'message' => 'Successfully logout !'
        ], 200);

    }

}
