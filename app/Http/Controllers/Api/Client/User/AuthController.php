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
                    'date_of_birth' => $validated['dob'],
                    'password' => Hash::make($validated['password']),
                    'user_type'=>User::USER_TYPE_CUSTOMER
                ]);
                return response()->json(['message'=>'Customer created successfully !','status'=>200],200);
            }else{
                return response()->json(['message'=>'validation error !'],403);
            }
        }catch (\Throwable $throwable){

            return response()->json([
                'status' => false,
                'message' => $throwable->getMessage()
            ], 500);
        }
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email','password');

        try {
            if (Auth::attempt($credentials)){

                $user = Auth::user();
                $data['id'] = $user->id;
                $data['fullName'] = $user->full_name;
                $data['username'] = $user->username;
                $data['email'] = $user->email;
                $data['phone'] = $user->phone;
                $data['gender'] = $user->gender;
                $data['date_of_birth'] = custom_date($user->date_of_birth);
                $data['user_type'] = $user->user_type;
                $data['avatar_url'] = $user->avatar_url;
                $data['token'] = $user->createToken('API TOKEN')-> plainTextToken;


                return response()->json(['data'=>$data,'status'=>200],200);
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
