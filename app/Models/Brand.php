<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Brand extends Model
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes,ModelBootHandler;

    public const FILE_STORE_THUMB_PATH = 'brands/thumb';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'status',
        'thumbnail',
    ];

    public function getThumbUrlAttribute()
    {
        return get_storage_image(self::FILE_STORE_THUMB_PATH, $this->thumbnail, 'brand');
    }

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }
}
