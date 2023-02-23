<?php

namespace App\Http\Controllers\Api\Client\Message;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Twilio\TwiML\MessagingResponse;

class MessageController extends Controller
{
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

        $data = $request->all();

        $WaId = $data['WaId'];

        $phone = substr($WaId, strlen($WaId)-10);
        $countryCallingCode = substr($WaId, 0, -10);

        $user = User::where('phone',$phone)
            ->where('country_calling_code',$countryCallingCode)
            ->first();

        Log::debug($user);
        //Log::debug($data['Body']);
        //Log::debug($request->all());
        //dd($request->all());

    }
}
