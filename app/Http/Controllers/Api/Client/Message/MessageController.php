<?php

namespace App\Http\Controllers\Api\Client\Message;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use App\Models\User;
use App\Utils\GlobalConstant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Twilio\TwiML\MessagingResponse;
use Twilio\Rest\Client;

class MessageController extends Controller
{
    public function fetchMessages($id)
    {
        $messages =  Message::where('customer_id',$id)->get();

        $data = MessageResource::collection($messages);
        return response()->json(['success' => 'Data fetched successfully','status'=>200,'message'=>$data],200);
    }
    public function save(Request $request)
    {
        //dd('hello from message controller save method');

//        array (
//            'SmsMessageSid' => 'SM3ba1a8861b8af76a740190a0048c3490',
//            'NumMedia' => '0',
//            'ProfileName' => 'Porag',
//            'SmsSid' => 'SM3ba1a8861b8af76a740190a0048c3490',
//            'WaId' => '8801828963235',
//            'SmsStatus' => 'received',
//            'Body' => 'Shell be',
//            'To' => 'whatsapp:+14155238886',
//            'NumSegments' => '1',
//            'ReferralNumMedia' => '0',
//            'MessageSid' => 'SM3ba1a8861b8af76a740190a0048c3490',
//            'AccountSid' => 'AC72f804641aeb364f427ccb55a0e574e7',
//            'From' => 'whatsapp:+8801828963235',
//            'ApiVersion' => '2010-04-01',
//        )

        if ($request->customer_id){
            $customer_id = $request->customer_id;
            $customer = User::find($customer_id);
            $customer_phone = '+'.$customer->country_calling_code.$customer->phone;
            $to = $customer_phone;
            $from = env('TWILIO_WHATSAPP_FROM');
            $message = $request->message;
            $whatsapp = send_whatsapp_message($to,$from,$message);

            if ($whatsapp->sid){
                $message = Message::create([
                    'customer_id'=>$customer->id,
                    'admin_id'=>$request->admin_id,
                    'from_id'=>$request->admin_id,
                    'to_id'=>$customer->id,
                    'message'=>$message,
                    'status'=>GlobalConstant::CHAT_MESSAGE_READ
                ]);
                if ($message){

                    $data['id'] = $message->id;
                    $data['customer_id'] = $message->customer_id;
                    $data['admin_id'] = $message->admin_id;
                    $data['from_id'] = $message->from_id;
                    $data['to_id'] = $message->to_id;
                    $data['message'] = $message->message;
                    $data['status'] = $message->status;
                    $data['avatar'] = $message->owner->avatar_url;
                    $data['full_name'] = $message->owner->full_name;
                    $data['user_type'] = $message->owner->user_type;
                    $data['time'] = Carbon::parse($message->created_at)->diffForHumans();

                    $user = User::find($message->to_id);
                    broadcast(new MessageSent($user, $data))->toOthers();
                    //Log::debug($data['Body']);
                    return response()->json(['success' => 'Message save successfully','status'=>200,'message'=>$data],200);
                }else{
                    return response()->json(['message' => 'Something went wong to save data','status'=>500],500);
                }
            }else{
                return response()->json(['message' => 'Something went wong with twilio','status'=>200],401);
            }
        }else{
            $received = $request->all();

            $WaId = $received['WaId'];

            $phone = substr($WaId, strlen($WaId)-10);
            $countryCallingCode = substr($WaId, 0, -10);

//            $user = User::where('phone',$phone)
//                ->where('country_calling_code',$countryCallingCode)
//                ->first();
            $user = User::where('id',14)
                ->first();

            if ($user){
                $message = Message::create([
                    'customer_id'=>$user->id,
                    'admin_id'=>1,
                    'from_id'=>$user->id,
                    'to_id'=>1,
                    'message'=>$received['Body'],
                    'status'=>GlobalConstant::CHAT_MESSAGE_UNREAD
                ]);
                if ($message){

                    $data['id'] = $message->id;
                    $data['customer_id'] = $message->customer_id;
                    $data['admin_id'] = $message->admin_id;
                    $data['from_id'] = $message->from_id;
                    $data['to_id'] = $message->to_id;
                    $data['message'] = $message->message;
                    $data['status'] = $message->status;
                    $data['avatar'] = $message->owner->avatar_url;
                    $data['full_name'] = $message->owner->full_name;
                    $data['user_type'] = $message->owner->user_type;
                    $data['time'] = Carbon::parse($message->created_at)->diffForHumans();

                    $user = User::find($message->to_id);
                    broadcast(new MessageSent($user, $data))->toOthers();
                    //Log::debug($data['Body']);
                    return response()->json(['success' => 'Message save successfully','status'=>200,'message'=>$data],200);
                }else{
                    return response()->json(['message' => 'Something went wong to save data','status'=>500],500);
                }
            }else{
                return response()->json(['message' => 'Twilio message come from other','status'=>401],401);
            }

            //ngrok http 8000
            //Log::debug($data['Body']);
            //Log::debug($request->all());
            //dd($request->all());
        }

    }
}
