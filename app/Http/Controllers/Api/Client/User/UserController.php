<?php

namespace App\Http\Controllers\Api\Client\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function updateProfile(Request $request ,$id)
    {
        $user = User::find($id);
        try {
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->country_code = $request->country_code;
            $user->date_of_birth = $request->date_of_birth;
            $user->save();

            if ($request->avatarImageFile != null){
                //logo
                $file = $request->file('avatarImageFile');
                $name = 'logo_' . uniqid() . '.' . $file->extension();
                $file->storePubliclyAs('/', User::FILE_STORE_PATH.'/'.$name);
                $user['avatar'] = $name;
                $user->save();
            }

            return response()->json(['message'=>'Profile updated successfully !','status'=>200],200);
        }catch (\Throwable $throwable){

            return response()->json([
                'status' => false,
                'message' => $throwable->getMessage()
            ], 500);
        }
    }

    public function getUserData($id)
    {
        $user = User::find($id);
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

        return response()->json(['data'=>$data,'status'=>200],200);
    }

    public function changePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required',
        ]);

        $user_id = $request->user_id;
        //$user_id = (int)$user_id;
        $user = User::find($user_id);

        #Match The Old Password
        if(!Hash::check($request->old_password, $user->password)){
            return back()->with("error", "Old Password Doesn't match!");
        }
        //dd($request->all());

        #Update the new Password
        User::whereId($user->id)->update([
            'password' => Hash::make($request->new_password)
        ]);

        $data = [
            'email'=>$user->email,
            'message'=>'Record updated successfully',
        ];
        dd($data);
        return response()->json(['status'=>200,'data'=>$data]);
    }
}
