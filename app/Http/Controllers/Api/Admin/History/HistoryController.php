<?php

namespace App\Http\Controllers\Api\Admin\History;

use App\Http\Controllers\Controller;
use App\Http\Resources\HistoryResource;
use App\Models\History;
use App\Utils\GlobalConstant;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
    public function getLastFive()
    {
        $items = History::where('status',GlobalConstant::HISTORY_STRATUS_UNREAD)->take(5)->get();
        $items = HistoryResource::collection($items);
        $total = History::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }
}
