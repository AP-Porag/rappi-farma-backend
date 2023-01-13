<?php

namespace App\Http\Controllers\Api\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function index(Request $request)
    {
        $users = UserResource::collection(User::where('user_type','=',User::USER_TYPE_DRIVER)->paginate($request->per_page));
        $total = User::where('user_type','=',User::USER_TYPE_DRIVER)->count();
        $data = [
            "users"=>$users,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }

    public function datatableSearch(Request $request,$text)
    {
        $users = User::where('user_type','=',User::USER_TYPE_DRIVER)
            ->where("first_name","LIKE","%$text%")
            ->orWhere("last_name","LIKE","%$text%")
            ->orWhere("phone","LIKE","%$text%")
            ->orWhere("email","LIKE","%$text%")
            ->orWhere("user_type","LIKE","%$text%")
            ->paginate($request->per_page);
        $users = UserResource::collection($users);
        $total = User::where('user_type','=',User::USER_TYPE_DRIVER)->count();
        $data = [
            "users"=>$users,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }
}
