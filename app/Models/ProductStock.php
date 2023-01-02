<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class ProductStock extends Model
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes,ModelBootHandler;

    protected $fillable = [
        'stock_id',
        'product_id',
        'product_name',
        'product_image',
        'product_quantity',
    ];

    public function stock()
    {
        return $this->belongsTo(Stock::class,'stock_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id');
    }
}
