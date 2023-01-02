<?php

namespace App\Http\Controllers\Api\Admin\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Stock;
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
        $backgrounds = ['#ff583d', '#1393a2', '#02522f', '#DD1B16','#b20021'];
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

    public function stockBarChartData()
    {
        $dataArray = Stock::selectRaw('year(created_at) year, monthname(created_at) month, sum(total_product_quantity) stock')
            ->where('status','stock-in')
            ->where("created_at", ">", \Illuminate\Support\Carbon::now()->subMonths(13))
            ->groupBy('year', 'month')
            ->orderBy('created_at', 'ASC')
            ->get();
        return $dataArray;
        return response()->json(['status'=>200,'data'=>$monthly_order_data_array]);
    }

    public function recentOrderData()
    {
        $orders = Order::select('id','SKU','total_product_quantity','total_price','shipping_type','address','whats_app_number','status')
            ->orderBy('id','DESC')
            ->limit(GlobalConstant::DEFAULT_RECENT_LIMIT)
            ->get();
        return $orders;
    }
}
