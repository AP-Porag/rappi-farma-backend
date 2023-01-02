<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Category extends Model
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes,ModelBootHandler;

    public const FILE_STORE_THUMB_PATH = 'categories/thumb';
    public const FILE_STORE_BANNER_PATH = 'categories/banner';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'status',
        'thumbnail',
        'banner',
    ];

    public function getThumbUrlAttribute()
    {
        return get_storage_image(self::FILE_STORE_THUMB_PATH, $this->thumbnail, 'category');
    }
    public function getBannerUrlAttribute()
    {
        return get_storage_image(self::FILE_STORE_BANNER_PATH, $this->banner, 'category');
    }

    public function brands()
    {
        return $this->hasMany(Brand::class);
    }
}
