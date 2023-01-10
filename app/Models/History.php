<?php

namespace App\Models;

use App\Traits\ModelBootHandler;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory,ModelBootHandler;

    protected $fillable = [
        'type',
        'message',
        'status',
    ];
}
