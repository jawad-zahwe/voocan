<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $fillable = ['profile_id', 'movie_id'];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }
}
