<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use HasFactory,ModelBootHandler,SoftDeletes;

    protected $fillable=[
        'customer_id','admin_id','from_id','to_id','message','status'//avatar,userfullname,created_at,user_type
    ];

    public function customer()
    {
        return $this->belongsTo(User::class,'customer_id');
    }
    public function admin()
    {
        return $this->belongsTo(User::class,'admin_id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class,'from_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'from_id');
    }
}
