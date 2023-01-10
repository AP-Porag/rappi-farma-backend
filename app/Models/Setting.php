<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory,ModelBootHandler;
    public const FILE_STORE_THUMB_PATH = 'settings';

    protected $fillable = [
        'key',
        'value',
    ];

}
