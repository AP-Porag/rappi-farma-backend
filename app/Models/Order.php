<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory,ModelBootHandler;

    protected $fillable = [
        "user_id",
        "total_product_quantity",
        "subtotal",
        "shipping_type",
        "shipping_charge",
        "total_price",
        "SKU",
        "discount_type",
        "discount_amount",
        "address",
        "city",
        "country",
        "zip_code",
        "whats_app_number",
        "status",
    ];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class,'order_id');
    }

}
