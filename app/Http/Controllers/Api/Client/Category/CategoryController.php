<?php

namespace App\Http\Controllers\Api\Client\Category;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryBrandResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $items = CategoryResource::collection(Category::orderBy('id','DESC')->paginate(12));
        $total = Category::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }

    public function details($slug)
    {
        $item = Category::where('slug',$slug)->first();
        $item = new CategoryResource($item);
        return response()->json(['status'=>200,'item'=>$item]);
    }

    public function categoryProduct($id)
    {
        $item = Category::find($id);
        $items = ProductResource::collection(Product::where('category_id',$item->id)->orderBy('id','ASC')->limit(10)->get());
        $total = Product::where('category_id',$item->id)->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function categoryBrand()
    {
        $items = CategoryBrandResource::collection(Category::where('id','!=',1)->orderBy('id','ASC')->get());
        $total = Category::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }
}
