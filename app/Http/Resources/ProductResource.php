<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
//category_id,name,slug,short_description,description,price,SKU,thumbnail
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'slug'=>$this->slug,
            'status'=>$this->status,
            'short_description'=>$this->short_description,
            'description'=>$this->description,
            'thumb'=>$this->thumb_url,
            'current_stock'=>$this->current_stock,
            'price'=>$this->price,
            'unit'=>$this->unit,
            'SKU'=>$this->SKU,
            'discount'=>$this->discount,
            'discount_type'=>$this->discount_type,
            'category'=>[
                'category_id'=>$this->category_id != null ? $this->category->id : 'not set',
                'category_name'=>$this->category_id != null ? $this->category->name : 'not set',
            ],
            'brand'=>[
                'brand_id'=>$this->brand_id != null ? $this->brand->id : 'not set',
                'brand_name'=>$this->brand_id != null ? $this->brand->name : 'not set',
            ],

        ];
    }
}
