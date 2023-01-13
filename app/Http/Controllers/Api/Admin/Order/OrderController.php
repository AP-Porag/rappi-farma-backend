<?php

namespace App\Http\Controllers\Api\Admin\Order;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\History;
use App\Models\Order;
use App\Utils\GlobalConstant;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $items = OrderResource::collection(Order::orderBy('id','DESC')->paginate($request->per_page));
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Order::find($id);
        $item = new OrderResource($item);
        return response()->json(['status'=>200,'item'=>$item]);
    }

    public function changeStatus($id,Request $request)
    {
        $item = Order::find($id);
        $item->status = $request->status;
        $item->save();

        $history_type = GlobalConstant::ORDER_STATUS_PENDING;
        $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_CREATE;

        if ($request->status == GlobalConstant::ORDER_STATUS_SHIPPED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_SHIPPED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_SHIPPED;
        }

        if ($request->status == GlobalConstant::ORDER_STATUS_DELIVERED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_DELIVERED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_DELIVERED;
        }

        if ($request->status == GlobalConstant::ORDER_STATUS_CANCELED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_CANCELED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_CANCELED;
        }

        if ($request->status == GlobalConstant::ORDER_STATUS_REJECTED){
            $history_type = GlobalConstant::HISTORY_TYPE_ORDER_REJECTED;
            $history_message = GlobalConstant::HISTORY_MESSAGE_ORDER_REJECTED;
        }


        $history = History::create([
            'order_id'=>$item->id,
            'type'=>$history_type,
            'message'=>$history_message,
            'status'=>GlobalConstant::HISTORY_STRATUS_UNREAD,
        ]);


        return response()->json(['status'=>200,'item'=>$item]);
    }

    public function datatableSearch(Request $request,$text)
    {
        $items = Order::where("whats_app_number","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = OrderResource::collection($items);
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }


    //pending order
    public function pendingIndex(Request $request)
    {
        $items = OrderResource::collection(Order::where('status',GlobalConstant::ORDER_STATUS_PENDING)->orderBy('id','DESC')->paginate($request->per_page));
        $total = Order::where('status',GlobalConstant::ORDER_STATUS_PENDING)->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }
    public function pendingDatatableSearch(Request $request,$text)
    {
        $items = Order::where('status',GlobalConstant::ORDER_STATUS_PENDING)->where("whats_app_number","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = OrderResource::collection($items);
        $total = Order::where('status',GlobalConstant::ORDER_STATUS_PENDING)->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    //shipped order
    public function shippedIndex(Request $request)
    {
        $items = OrderResource::collection(Order::where('status',GlobalConstant::ORDER_STATUS_SHIPPED)->orderBy('id','DESC')->paginate($request->per_page));
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }
    public function shippedDatatableSearch(Request $request,$text)
    {
        $items = Order::where('status',GlobalConstant::ORDER_STATUS_SHIPPED)->where("whats_app_number","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = OrderResource::collection($items);
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    //delivered order
    public function deliveredIndex(Request $request)
    {
        $items = OrderResource::collection(Order::where('status',GlobalConstant::ORDER_STATUS_DELIVERED)->orderBy('id','DESC')->paginate($request->per_page));
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }
    public function deliveredDatatableSearch(Request $request,$text)
    {
        $items = Order::where('status',GlobalConstant::ORDER_STATUS_DELIVERED)->where("whats_app_number","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = OrderResource::collection($items);
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    //canceled order
    public function canceledIndex(Request $request)
    {
        $items = OrderResource::collection(Order::where('status',GlobalConstant::ORDER_STATUS_CANCELED)->orderBy('id','DESC')->paginate($request->per_page));
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }
    public function canceledDatatableSearch(Request $request,$text)
    {
        $items = Order::where('status',GlobalConstant::ORDER_STATUS_CANCELED)->where("whats_app_number","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = OrderResource::collection($items);
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    //rejected order
    public function rejectedIndex(Request $request)
    {
        $items = OrderResource::collection(Order::where('status',GlobalConstant::ORDER_STATUS_REJECTED)->orderBy('id','DESC')->paginate($request->per_page));
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }
    public function rejectedDatatableSearch(Request $request,$text)
    {
        $items = Order::where('status',GlobalConstant::ORDER_STATUS_REJECTED)->where("whats_app_number","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = OrderResource::collection($items);
        $total = Order::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    //frontend recent order & order history
    public function recentOrder(Request $request)
    {
        $user_id = $request->user_id;
        $items = OrderResource::collection(Order::where('user_id',$user_id)->orderBy('id','DESC')->limit(GlobalConstant::DEFAULT_RECENT_LIMIT)->get());
        $data = [
            "items"=>$items,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function orderHistory(Request $request)
    {
        $user_id = $request->user_id;
        $items = OrderResource::collection(Order::where('user_id',$user_id)->orderBy('id','DESC')->get());
        $data = [
            "items"=>$items,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function orderCardData()
    {
        $total_orders = Order::count();
        $total_pending_orders = Order::where('status',GlobalConstant::ORDER_STATUS_PENDING)->count();
        $total_shipped_orders = Order::where('status',GlobalConstant::ORDER_STATUS_SHIPPED)->count();
        $total_delivered_orders = Order::where('status',GlobalConstant::ORDER_STATUS_DELIVERED)->count();
        $total_rejected_orders = Order::where('status',GlobalConstant::ORDER_STATUS_REJECTED)->count();
        $total_canceled_orders = Order::where('status',GlobalConstant::ORDER_STATUS_CANCELED)->count();
        $data = [
            "total_orders"=>$total_orders,
            "total_pending_orders"=>$total_pending_orders,
            "total_shipped_orders"=>$total_shipped_orders,
            "total_delivered_orders"=>$total_delivered_orders,
            "total_rejected_orders"=>$total_rejected_orders,
            "total_canceled_orders"=>$total_canceled_orders,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }



}
