<?php

namespace App\Http\Controllers\Api\Admin\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = UserResource::collection(User::where('user_type','!=',User::USER_TYPE_CUSTOMER)->paginate($request->per_page));
        $total = User::where('user_type','!=',User::USER_TYPE_CUSTOMER)->count();
        $data = [
            "users"=>$users,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        $user = User::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'username'=>$request->username,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'gender'=>$request->gender,
            'date_of_birth'=>$request->date_of_birth,
            'user_type'=>$request->user_type,
            'avatar'=>null,
            'password'=>Hash::make($request->password),
        ]);

        if ($user){
            //image upload
            if ($request->image){

                $image_64 = $request->image; //your base64 encoded data
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($image_64, 0, strpos($image_64, ',')+1);
                // find substring for replace here eg: data:image/png;base64,
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                $imageName = time().'.'.$extension;
                Storage::disk('public')->put(User::FILE_STORE_PATH.'/' . $imageName, base64_decode($image));
                $image_link = $imageName;


                $user->avatar = $image_link;
                $user->save();
            }


        }

        return response()->json(['status'=>200,'message'=>'Record created successfully']);
    }

    public function show($id)
    {
        $user = User::find($id);

        return response()->json(['status'=>200,'user'=>$user]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            if ($id){
                User::find($id)->delete();
                return response()->json(['status'=>200,'message'=>'Record deleted successfully']);
            }else{
                return response()->json(['status'=>401,'message'=>'User not found']);
            }

        }catch (\Exception $exception){
            return response()->json(['status'=>500,'message'=>'Server error']);
        }
    }

    public function datatableSearch(Request $request,$text)
    {
        $users = User::where('user_type','!=',User::USER_TYPE_CUSTOMER)
            ->where("first_name","LIKE","%$text%")
            ->orWhere("last_name","LIKE","%$text%")
            ->orWhere("phone","LIKE","%$text%")
            ->orWhere("email","LIKE","%$text%")
            ->orWhere("user_type","LIKE","%$text%")
            ->paginate($request->per_page);
        $users = UserResource::collection($users);
        $total = User::where('user_type','!=',User::USER_TYPE_CUSTOMER)->count();
        $data = [
            "users"=>$users,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }
}
