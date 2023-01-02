<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Stock extends Model
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes,ModelBootHandler;

    // stock type
    public const STOCK_STATUS_STOCK_IN   = 'stock-in';
    public const STOCK_STATUS_STOCK_OUT = 'stock-out';

    // stock remark
    public const STOCK_REMARK_STOCK_ADD   = 'stock-add'; //green darken-4
    public const STOCK_REMARK_STOCK_DEDUCT   = 'stock-deduct'; //red darken-4
    public const STOCK_REMARK_STOCK_SELL   = 'stock-sell'; //indigo darken-4

    protected $fillable = [
        'total_product',
        'total_product_quantity',
        'SKU',
        'status',
        'remark',
    ];

    public function productStocks()
    {
        return $this->hasMany(ProductStock::class);
    }
}
