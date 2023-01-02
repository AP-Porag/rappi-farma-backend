<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductStockResource extends JsonResource
{
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
            'name'=>$this->product_name,
            'thumb'=>$this->product_image,
            'quantity'=>$this->product_quantity,
            'status'=>$this->stock->status,
            'remark'=>$this->stock->remark,
            'created_at'=>custom_date($this->created_at),
            'created_ago'=>$this->created_at->diffForHumans(),
        ];
    }
}
