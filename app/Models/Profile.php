<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    public $fillable=[
        'user_id',
        'name',
        'avatar',
        'is_kid',
        'pin_code',
        'created_at',
        'updated_at',
        'is_active',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }


}
