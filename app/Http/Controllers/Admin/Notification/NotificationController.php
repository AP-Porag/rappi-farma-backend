<?php

namespace App\Http\Controllers\Admin\Notification;

use App\Events\MessageStatueChangedEvent;
use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use App\Models\User;
use App\Utils\GlobalConstant;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getAllUnread()
    {
        $messages =  Message::where('status',GlobalConstant::CHAT_MESSAGE_UNREAD)->orderBy('id','DESC')->get();

        $data = MessageResource::collection($messages);
        return response()->json(['success' => 'Data fetched successfully','status'=>200,'message'=>$data],200);
    }

    public function changeAllStatus(Request $request)
    {
        //dd($request->all());
        $customer_id = $request->customer_id;

        $messages =  Message::where('customer_id',$customer_id)->where('status',GlobalConstant::CHAT_MESSAGE_UNREAD)->get();

        $data = [];
        if ($messages->count() > 0){
            foreach ($messages as $message){
                $message->status = GlobalConstant::CHAT_MESSAGE_READ;
                $message->save();
                $data[] = $message->id;
            }
            $user = User::find($request->admin_id);
            //broadcast(new MessageStatueChangedEvent($user,$data))->toOthers();
            return response()->json(['success' => 'Status changed successfully','status'=>200,'data'=>$data,'user'=>$user],200);
        }else{
            return response()->json(['success' => 'No status to change','status'=>200],200);
        }


    }
}
