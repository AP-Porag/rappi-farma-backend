<?php

namespace App\Http\Controllers\Api\Client\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isEmpty;

class ProductController extends Controller
{
    public function index(Request $request)
    {
//        $items = ProductResource::collection(Product::orderBy('id','DESC')->paginate(12));
//        $total = Product::count();
//        $data = [
//            "items"=>$items,
//            "total"=>$total
//        ];
//
//        return response()->json(['status'=>200,'data'=>$data]);
        $query = Product::query();
        if (!isEmpty($request)){
            //keywords filter
            if ($request->keywords != 'null'){
                $query->where('name', 'LIKE','%'.$request->keywords.'%');
            }

            //color filter
            if ($request->category != 'null'){
                $query->where('category_id',$request->category);
            }

            //brand filter
            if ($request->brand != 'null'){
                $query->where('brand_id',$request->brand);
            }
        }

        $products = $query->orderBy('id','DESC')->paginate(12);

        $items = ProductResource::collection($products);
        $total = $products->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];
        return response()->json(['status'=>200,'data'=>$data]);

    }

    public function details($slug)
    {
        $item = Product::where('slug',$slug)->first();
        $item = new ProductResource($item);
        return response()->json(['status'=>200,'item'=>$item]);
    }
}
