<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'first_name'=>$this->first_name,
            'last_name'=>$this->last_name,
            'full_name'=>$this->full_name,
            'username'=>$this->username,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'gender'=>$this->gender,
            'date_of_birth'=>$this->date_of_birth ? custom_date($this->date_of_birth) : null,
            'user_type'=>$this->user_type,
            'avatar'=>$this->avatar_url,
        ];
    }
}
