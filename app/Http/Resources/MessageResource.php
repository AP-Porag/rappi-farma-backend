<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            'id' => $this->id,
            'customer_id' => $this->customer_id,
            'admin_id' => $this->admin_id,
            'from_id' => $this->from_id,
            'to_id' => $this->to_id,
            'message' => $this->message,
            'status' => $this->status,
            'avatar' => $this->owner->avatar_url,
            'full_name' => $this->owner->full_name,
            'user_type' => $this->owner->user_type,
            'time' => Carbon::parse($this->created_at)->diffForHumans(),
        ];
    }
}
