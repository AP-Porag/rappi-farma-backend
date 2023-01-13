<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
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
            'order_id'=>$this->order_id,
            'id'=>$this->id,
            'type'=>$this->type,
            'message'=>$this->message,
            'status'=>$this->status,
            'customer_full_name'=>$this->order->user->fullName,
            'customer_avatar_url'=>$this->order->user->avatar_url,
            'created_at'=>diffForHumans($this->created_at),
        ];
    }
}
