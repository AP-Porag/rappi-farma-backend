<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'total_product_quantity'=>$this->total_product_quantity,
            'subtotal'=>$this->subtotal,
            'shipping_type'=>$this->shipping_type,
            'shipping_charge'=>$this->shipping_charge,
            'total_price'=>$this->total_price,
            'SKU'=>$this->SKU,
            'discount_type'=>$this->discount_type,
            'discount_amount'=>$this->discount_amount,
            'address'=>$this->address,
            'city'=>$this->city,
            'country'=>$this->country,
            'zip_code'=>$this->zip_code,
            'whats_app_number'=>$this->whats_app_number,
            'status'=>$this->status,
            'created_at'=>custom_date($this->created_at),
            'user'=>new UserResource($this->user),
            'products'=>OrderProductResource::collection($this->orderProducts)
        ];
    }
}
