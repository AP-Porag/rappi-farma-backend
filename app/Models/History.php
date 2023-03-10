<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory,ModelBootHandler;

    protected $fillable = [
        'order_id',
        'type',
        'message',
        'status',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class,'order_id');
    }
}
