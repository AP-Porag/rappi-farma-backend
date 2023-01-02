<?php

namespace App\Http\Controllers\Api\Client\Brand;

use App\Http\Controllers\Controller;
use App\Http\Resources\BrandResource;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $items = BrandResource::collection(Brand::orderBy('id','DESC')->paginate(12));
        $total = Brand::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }

    public function details($slug)
    {
        $item = Brand::where('slug',$slug)->first();
        $item = new BrandResource($item);
        return response()->json(['status'=>200,'item'=>$item]);
    }

    public function brandProduct($slug)
    {
        $item = Brand::where('slug',$slug)->first();
        $items = ProductResource::collection(Product::where('brand_id',$item->id)->orderBy('id','DESC')->limit(10)->get());
        $total = Product::where('brand_id',$item->id)->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }
}
