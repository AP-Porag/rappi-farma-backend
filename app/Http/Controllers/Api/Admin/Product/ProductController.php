<?php

namespace App\Http\Controllers\Api\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductRequest;
use App\Http\Resources\HistoryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductStockResource;
use App\Http\Resources\VSelectResource;
use App\Models\Brand;
use App\Models\History;
use App\Models\Product;
use App\Models\ProductStock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $items = ProductResource::collection(Product::orderBy('id','DESC')->paginate($request->per_page));
        $total = Product::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        //category_id,name,slug,short_description,description,price,SKU,thumbnail
        $lastSKU = Product::orderBy('id', 'DESC')->first()->SKU;
        $SKU = $lastSKU+1;

        $SKU = sprintf('%010d', $SKU);

        $item = Product::create([
            'category_id'=>$request->category_id,
            'brand_id'=>$request->brand_id,
            'name'=>$request->name,
            'slug'=>Str::slug($request->name),
            'short_description'=>$request->short_description,
            'description'=>$request->description,
            'price'=>$request->price,
            'SKU'=>$SKU,
            'current_stock'=>$request->current_stock,
            'unit'=>$request->unit,
            'status'=>$request->status,
            'thumbnail'=>null,
        ]);

        if ($item){
            //image upload
            if ($request->thumbnail_image){

                $image_64 = $request->thumbnail_image; //your base64 encoded data
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($image_64, 0, strpos($image_64, ',')+1);
                // find substring for replace here eg: data:image/png;base64,
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                $imageName = time().'.'.$extension;
                Storage::disk('public')->put(Product::FILE_STORE_THUMB_PATH.'/' . $imageName, base64_decode($image));
                $image_link = $imageName;


                $item->thumbnail = $image_link;
                $item->save();
            }


        }

        return response()->json(['status'=>200,'message'=>'Record created successfully']);
    }

    public function show($id)
    {
        $item = Product::find($id);
        $item = new ProductResource($item);
        return response()->json(['status'=>200,'item'=>$item]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $item = Product::find($id);
        $item->category_id = $request->category_id;
        $item->brand_id = $request->brand_id;
        $item->name = $request->name;
        $item->slug = Str::slug($request->name);
        $item->short_description = $request->short_description;
        $item->description = $request->description;
        $item->price = $request->price;
        $item->current_stock = $request->current_stock;
        $item->unit = $request->unit;
        $item->status = $request->status;
        $item->save();

        if ($item){
            //image upload
            if (str_contains($request->thumbnail_image, 'data:image/')){

                $path = Product::FILE_STORE_THUMB_PATH.'/' . $item->thumbnail;
                delete_image($path);

                $image_64 = $request->thumbnail_image; //your base64 encoded data
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($image_64, 0, strpos($image_64, ',')+1);
                // find substring for replace here eg: data:image/png;base64,
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                $imageName = time().'.'.$extension;
                Storage::disk('public')->put(Product::FILE_STORE_THUMB_PATH.'/' . $imageName, base64_decode($image));
                $image_link = $imageName;


                $item->thumbnail = $image_link;
                $item->save();
            }


        }

        return response()->json(['status'=>200,'message'=>'Record updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            if ($id){
                $item = Product::find($id);

                $path = Product::FILE_STORE_THUMB_PATH.'/' . $item->thumbnail;
                delete_image($path);

                $item->delete();
                return response()->json(['status'=>200,'message'=>'Record deleted successfully']);
            }else{
                return response()->json(['status'=>401,'message'=>'Record not found']);
            }

        }catch (\Exception $exception){
            return response()->json(['status'=>500,'message'=>'Server error']);
        }
    }

    public function datatableSearch(Request $request,$text)
    {
        $items = Product::where("name","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->paginate($request->per_page);
        $items = ProductResource::collection($items);
        $total = Product::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function allBrandForCategory($category_id)
    {
        $items = Brand::where('category_id',$category_id)->get();
        $items = VSelectResource::collection($items);

        $total = $items->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function searchProductForAddStock($text)
    {
        $items = Product::where("name","LIKE","%$text%")
            ->orWhere('SKU',$text)
            ->get();
        $items = ProductResource::collection($items);
        $total = Product::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function getProductHistory($product_id)
    {
        $items = ProductStock::where('product_id',$product_id)->orderBy('created_at','DESC')->limit(8)->get();

        $items = ProductStockResource::collection($items);

        $total = $items->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function productOrderHistoryData($product_id)
    {
        $order_history = HistoryResource::collection(History::where('type','order')->where('product_id',$product_id)->take(5)->get());
        $data = [
            "order_history"=>$order_history,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function productCardData()
    {
        $total_products = Product::count();
        //$total_stock = Product::sum('current_stock');
        $total_stock = DB::table('products')->sum('current_stock');
        $data = [
            "total_products"=>$total_products,
            "total_stock"=>$total_stock,
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }


}
