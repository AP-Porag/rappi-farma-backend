<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $product_id = rand(1,19557);
        $product = Product::find($product_id);
        return [
            "order_id"=>rand(1,500),
            "product_id"=>$product_id,
            "name"=>$product->name,
            "image"=>$product->thumbnail,
            "price"=>$product->price,
            "quantity"=>rand(500,2000),
        ];
    }
}
