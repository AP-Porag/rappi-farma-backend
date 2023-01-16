<?php

namespace App\Http\Controllers\Api\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Resources\HistoryResource;
use App\Models\History;
use App\Models\Order;
use App\Models\Product;
use App\Models\Stock;
use App\Models\User;
use App\Utils\GlobalConstant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function saleDoughnutChartData()
    {
        $orders = DB::table('orders')
            ->select('status', DB::raw('count(*) as total'))
            ->groupBy('status')
            ->get();

        //return $orders;
//        canceled #670016
//        delivered #02522f,
//        pending #ff583d,
//        rejected #ff0500
//        shipped #168d9a,
        $backgrounds = ['#670016', '#02522f', '#f4511e', '#ff0500','#168d9a'];
        $counts = [];
        $statuses = [];
        $colors = [];
        foreach ($orders as $key=>$order){
            $counts[]= $order->total;
            $statuses[] = $order->status;
            $colors[] = $backgrounds[$key];
        }
        $data = [
            'counts'=>$counts,
            'statuses'=>$statuses,
            'colors'=>$colors,
        ];
        //return $data;
        return response()->json(['status'=>200,'data'=>$data]);

    }

    public function saleGraphChartData()
    {
        $dataArray = Order::selectRaw('year(created_at) year, monthname(created_at) month, count(*) orders')
            ->where("created_at", ">", \Illuminate\Support\Carbon::now()->subMonths(13))
            ->groupBy('year', 'month')
            ->orderBy('created_at', 'ASC')
            ->get();


        $month_name_array = array();
        $monthly_order_count_array = array();
        if ($dataArray->count() != 0) {
            foreach ($dataArray as $data) {
                $unformated_date = $data->month . '-' . $data->year;
                $date = new \DateTime($unformated_date);
                $month_name = $date->format('M-y');
                array_push($month_name_array, $month_name);
                array_push($monthly_order_count_array, $data->orders);
            }
        }

        $monthly_order_data_array = array(
            'months' => $month_name_array,
            'orders' => $monthly_order_count_array,
        );
        //return $monthly_order_data_array;
        return response()->json(['status'=>200,'data'=>$monthly_order_data_array]);
    }

    public function orderPriceBarChartData()
    {
        $dataArray = Order::selectRaw('year(created_at) year, monthname(created_at) month, sum(total_price) orders')
            ->where("created_at", ">", \Illuminate\Support\Carbon::now()->subMonths(13))
            ->groupBy('year', 'month')
            ->orderBy('created_at', 'ASC')
            ->get();
        $month_name_array = array();
        $monthly_order_count_array = array();
        if ($dataArray->count() != 0) {
            foreach ($dataArray as $data) {
                $unformated_date = $data->month . '-' . $data->year;
                $date = new \DateTime($unformated_date);
                $month_name = $date->format('M-y');
                array_push($month_name_array, $month_name);
                array_push($monthly_order_count_array, $data->orders);
            }
        }

        $monthly_order_data_array = array(
            'months' => $month_name_array,
            'orders' => $monthly_order_count_array,
        );

        //return $monthly_order_data_array;
        return response()->json(['status'=>200,'data'=>$monthly_order_data_array]);
    }

    public function recentOrderData()
    {
        $orders = Order::select('id','SKU','total_product_quantity','total_price','shipping_type','address','whats_app_number','status')
            ->orderBy('id','DESC')
            ->limit(GlobalConstant::DEFAULT_RECENT_LIMIT)
            ->get();
        //return $orders;
        return response()->json(['status'=>200,'data'=>$orders]);
    }

    public function dashboardCardData()
    {
        $total_products = Product::count();
        $total_customers = User::where('user_type',User::USER_TYPE_CUSTOMER)->count();
        $total_sells = Order::count();
        $total_pending_orders = Order::where('status',GlobalConstant::ORDER_STATUS_PENDING)->count();
        $data = [
            "total_products"=>$total_products,
            "total_customers"=>$total_customers,
            "total_sells"=>$total_sells,
            "total_pending_orders"=>$total_pending_orders,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function lastProductOrderHistoryData()
    {
        $histories = History::latest()->take(3)->get();
        $last_order_history = HistoryResource::collection($histories);
        $data = [
            "last_order_history"=>$last_order_history,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }


}
