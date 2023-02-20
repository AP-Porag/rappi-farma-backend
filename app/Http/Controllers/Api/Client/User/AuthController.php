<?php

namespace App\Http\Controllers\Api\Client\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function registration(Request $request)
    {
        try {
            $validated = $request->validate([
                'first_name' => 'required',
                'last_name' => 'required',
                'whatsapp' => 'required',
                'country_code' => 'required',
                'country_calling_code' => 'required',
                'dob' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|min:8',
            ]);

            if ($validated){
                $user = User::create([
                    'first_name' => $validated['first_name'],
                    'last_name' => $validated['last_name'],
                    'email' => $validated['email'],
                    'phone' => $validated['whatsapp'],
                    'country_code' => $validated['country_code'],
                    'country_calling_code' => $validated['country_calling_code'],
                    'date_of_birth' => $validated['dob'],
                    'password' => Hash::make($validated['password']),
                    'user_type'=>User::USER_TYPE_CUSTOMER
                ]);
                return response()->json(['message'=>'Customer created successfully !','status'=>200],200);
            }else{
                //return response()->json(['message'=>'validation error !'],403);
                return response()->json(['status'=>403,'message'=>'validation error !']);
            }
        }catch (\Throwable $throwable){

            return response()->json([
                'status' => 500,
                'message' => $throwable->getMessage()
            ]);
        }
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email','password');

        try {
//            if (Auth::attempt($credentials)){
            if (Auth::attempt(['phone' => request('email'), 'password' => request('password')]) || Auth::attempt(['email' => request('email'), 'password' => request('password')])){
                $user = Auth::user();
                $data['id'] = $user->id;
                $data['first_name'] = $user->first_name;
                $data['last_name'] = $user->last_name;
                $data['fullName'] = $user->full_name;
                $data['username'] = $user->username;
                $data['email'] = $user->email;
                $data['phone'] = $user->phone;
                $data['country_code'] = $user->country_code;
                $data['country_calling_code'] = $user->country_calling_code;
                $data['gender'] = $user->gender;
                //$data['date_of_birth'] = custom_date($user->date_of_birth);
                $data['date_of_birth'] = date('Y-m-d', strtotime($user->date_of_birth));
                $data['user_type'] = $user->user_type;
                $data['avatar_url'] = $user->avatar_url;
                $data['token'] = $user->createToken('API TOKEN')-> plainTextToken;


                return response()->json(['data'=>$data,'status'=>200],200);
            }else{
                return response()->json(['status'=>401,'message'=>'Wrong credentials !'],200);
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
