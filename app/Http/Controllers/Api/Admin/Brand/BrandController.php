<?php

namespace App\Http\Controllers\Api\Admin\Brand;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BrandRequest;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\VSelectResource;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $items = BrandResource::collection(Brand::orderBy('id','DESC')->paginate($request->per_page));
        $total = Brand::count();
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
    public function store(BrandRequest $request)
    {
        $item = Brand::create([
            'category_id'=>$request->category_id,
            'name'=>$request->name,
            'slug'=>Str::slug($request->name),
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
                Storage::disk('public')->put(Brand::FILE_STORE_THUMB_PATH.'/' . $imageName, base64_decode($image));
                $image_link = $imageName;


                $item->thumbnail = $image_link;
                $item->save();
            }


        }

        return response()->json(['status'=>200,'message'=>'Record created successfully']);
    }

    public function show($id)
    {
        $item = Brand::find($id);
        $item = new BrandResource($item);
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
        $item = Brand::find($id);
        $item->category_id = $request->category_id;
        $item->name = $request->name;
        $item->slug = Str::slug($request->name);
        $item->status = $request->status;
        $item->save();

        if ($item){
            //image upload
            if (str_contains($request->thumbnail_image, 'data:image/')){

                $path = Brand::FILE_STORE_THUMB_PATH.'/' . $item->thumbnail;
                delete_image($path);

                $image_64 = $request->thumbnail_image; //your base64 encoded data
                $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];   // .jpg .png .pdf
                $replace = substr($image_64, 0, strpos($image_64, ',')+1);
                // find substring for replace here eg: data:image/png;base64,
                $image = str_replace($replace, '', $image_64);
                $image = str_replace(' ', '+', $image);
                $imageName = time().'.'.$extension;
                Storage::disk('public')->put(Brand::FILE_STORE_THUMB_PATH.'/' . $imageName, base64_decode($image));
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
                $item = Brand::find($id);

                $path = Brand::FILE_STORE_THUMB_PATH.'/' . $item->thumbnail;
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
        $items = Brand::where("name","LIKE","%$text%")
            ->paginate($request->per_page);
        $items = BrandResource::collection($items);
        $total = Brand::count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }

    public function AllCategories()
    {
        $items = VSelectResource::collection(Category::all());
        $total = $items->count();
        $data = [
            "items"=>$items,
            "total"=>$total
        ];

        return response()->json(['status'=>200,'data'=>$data]);
    }
}
