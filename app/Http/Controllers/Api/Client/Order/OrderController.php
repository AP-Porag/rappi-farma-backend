<?php

namespace App\Http\Controllers\Api\Client\Order;

use App\Http\Controllers\Controller;
use App\Http\Requests\FrontEnd\OrderRequest;
use App\Models\History;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\User;
use App\Notifications\OrderProcessed;
use App\Utils\GlobalConstant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        //header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        try {

            $customer_id = null;

            $customer = User::where('email',$request->email)->first();

            if ($customer){

                if ($customer->user_type == User::USER_TYPE_CUSTOMER){
                    $customer_id = $customer->id;
                }else{
                    $user = User::create([
                        'first_name'=>$request->first_name,
                        'last_name'=>$request->last_name,
                        'email'=>$request->email,
                        'password'=>Hash::make($request->phone),
                        'phone'=>$request->phone,
                        'user_type'=>User::USER_TYPE_CUSTOMER,
                        'status'=>GlobalConstant::STATUS_ACTIVE,
                    ]);

                    $customer_id = $user->id;
                }

            }else{
                $user = User::create([
                    'first_name'=>$request->first_name,
                    'last_name'=>$request->last_name,
                    'email'=>$request->email,
                    'password'=>Hash::make($request->phone),
                    'phone'=>$request->phone,
                    'user_type'=>User::USER_TYPE_CUSTOMER,
                    'status'=>GlobalConstant::STATUS_ACTIVE,
                ]);

                $customer_id = $user->id;
            }

            if ($customer_id){
                $barcode = $this->getBarcodeNumber();
                $order = Order::create([
                    'user_id'=>$customer_id,
                    'total_product_quantity'=>$request->total_quantity,
                    'subtotal'=>$request->subtotal,
                    'shipping_type'=>$request->shipping_type,
                    'shipping_cost'=>$request->shipping_cost,
                    'total_price'=>$request->total_price,
                    'SKU'=>$barcode,
                    'discount_type'=>$request->discount_type,
                    'discount_amount'=>$request->discount_amount,
                    'address'=>$request->address,
                    'apartment'=>$request->apartment,
                    'city'=>$request->city,
                    'country'=>$request->country,
                    'whats_app_number'=>$request->whatsapp,
                    'status'=>GlobalConstant::ORDER_STATUS_PENDING,
                    'zip_code'=>$request->zip_code,
                ]);
            }else{
                record_verified_flash('Something went wrong!');
                return ;
            }

            if ($order){

                foreach ($request->products as $product){
                    $orderProduct = OrderProduct::create([
                        'order_id'=>$order->id,
                        'product_id'=>$product['id'],
                        'name'=>$product['name'],
                        'image'=>$product['image'],
                        'price'=>$product['price'],
                        'quantity'=>$product['quantity'],
                    ]);
                }

                $order->user->notify(new OrderProcessed($order));

                $history = History::create([
                    'order_id'=>$order->id,
                    'type'=>GlobalConstant::HISTORY_TYPE_ORDER,
                    'message'=>GlobalConstant::HISTORY_MESSAGE_ORDER_CREATE,
                    'status'=>GlobalConstant::HISTORY_STRATUS_UNREAD,
                ]);

            }else{
                record_verified_flash('Something went wrong!');
                return ;
            }

        }catch (\Exception $exception){
            record_verified_flash('Something went wrong, Server error !');

            return response()->json(['massage' => 'Server error'], 500);
        }

//        $order = Order::create([
//            'user_id'=>3,
//            'SKU'=>$this->getBarcodeNumber(),
//            'status'=>GlobalConstant::ORDER_STATUS_PENDING,
//        ]);
        //$order->user->notify(new OrderProcessed($order));

        return response()->json(['success' => 'Order submitted successfully','status'=>200], 200);
    }


    public function index()
    {
        //all order according auth user
    }

    public function details()
    {
        //order details with id
    }

    public function getBarcodeNumber()
    {
        $barcodes = Order::all();
        if ($barcodes->count() > 0){
            $lastBarcodeId = Order::orderBy('id', 'DESC')->first()->SKU;
        }else{
            $setting = config('settings.admin_order_sku');
            //$setting = 3322440000;
            $lastBarcodeId = $setting;
            //$lastBarcodeId = 0;
        }

        return $lastBarcodeId+1;
    }

}
