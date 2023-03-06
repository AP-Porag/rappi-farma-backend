<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes,ModelBootHandler;

    public const FILE_STORE_PATH = 'users_avatar';
    // User type
    public const USER_TYPE_ADMIN   = 'admin';
    public const USER_TYPE_CUSTOMER = 'customer';
    public const USER_TYPE_DRIVER = 'driver';

    public const FILE_STORE_THUMB_PATH = 'content_images/thumb';
    public const THUMB_WIDTH = 300;
    public const THUMB_HEIGHT = 170;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'username',
        'email',
        'gender',
        'phone',
        'country_code',
        'country_calling_code',
        'avatar',
        'user_type',
        'date_of_birth',
        'password',
        'created_by',
        'updated_by',
        'verification_token',
        'email_verified_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
    public function getAvatarUrlAttribute()
    {
        return get_storage_image(self::FILE_STORE_PATH, $this->avatar, 'user');
    }

    public function routeNotificationForWhatsApp()
    {
        $phone = '+'.$this->country_calling_code.$this->phone;
        return $phone;
        //return $this->phone;
    }

    public function order()
    {
        return $this->hasMany(Order::class,'user_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class,'from_id');
    }

}
