<?php

namespace App\Http\Controllers\Api\Client\Product;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Category;
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

//        if (!isEmpty($request)){
//
//        }

        $query = Product::query();
        //keywords filter
        if ($request->keywords != 'null'){
            $query->where('name', 'LIKE','%'.$request->keywords.'%');
        }

        //color filter
        if ($request->category != 'null'){
            $category = Category::where('slug','=',$request->category)->first();
            $query->where('category_id',$category->id);
        }

        //brand filter
        if ($request->brand != 'null'){
            $query->where('brand_id',$request->brand);
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

    public function getSearchedProduct(Request $request)
    {
        if ($request->keywords != 'null'){
            $data = Product::where('name', 'LIKE','%'.$request->keywords.'%')->get();
            $data = ProductResource::collection($data);
        }else{
            $data = [];
        }

        $total = $data->count();
        $data = [
            "items"=>$data,
            "total"=>$total
        ];
        return response()->json(['status'=>200,'data'=>$data]);
    }

}
