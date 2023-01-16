<?php

namespace App\Http\Controllers\Api\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductStock;
use App\Models\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function stockAdd(Request $request)
    {
        //0000071946
        try {

            $products = $request->products;
            $total_product = count($products);
            $total_product_quantity = 0;
            $SKU = $this->getSKUNumber();
            foreach ($products as $product){
                $total_product_quantity += $product['quantity'];
            }
            if (count($products) > 0){
                $stock = Stock::create([
                    'total_product'=>$total_product,
                    'total_product_quantity'=>$total_product_quantity,
                    'SKU'=>$SKU,
                    'status'=>Stock::STOCK_STATUS_STOCK_IN,
                    'remark'=>Stock::STOCK_REMARK_STOCK_ADD,
                ]);

                if ($stock){
                    foreach ($products as $product){
                        $productStock = ProductStock::create([
                            'stock_id'=>$stock->id,
                            'product_id'=>$product['id'],
                            'product_name'=>$product['name'],
                            'product_image'=>$product['image'],
                            'product_quantity'=>$product['quantity'],
                        ]);
                        $pr = Product::find($product['id']);
                        $pr->current_stock = $pr->current_stock + $product['quantity'];
                        $pr->save();
                    }
                }
            }
            return response()->json(['status'=>200,'message'=>'Record saved successfully']);

        }catch (\Exception $exception){
            return response()->json(['status'=>500,'message'=>'Server error']);
        }

    }

    public function getSKUNumber()
    {
        $numbers = Stock::all();
        if ($numbers->count() > 0){
            $lastSKUId = Stock::orderBy('id', 'DESC')->first()->SKU;
        }else{
            //$setting = 7732330000;
            $setting = config('settings.admin_stock_sku');;
            $lastSKUId = $setting;
        }

        return $lastSKUId+1;
    }

}
