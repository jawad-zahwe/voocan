<?php

namespace App\Http\Controllers\Movies;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function toggleFavorite(Request $request, $profileId, $movieId) {
        $profile = Profile::where('user_id', Auth::id())
                          ->where('id', $profileId)
                          ->firstOrFail();

        $favorite = Favorite::where('profile_id', $profile->id)
                            ->where('movie_id', $movieId)
                            ->first();

        if ($favorite) {
            $favorite->delete();
            $isFav = false;
        } else {
            Favorite::create([
                'profile_id' => $profile->id,
                'movie_id' => $movieId
            ]);
            $isFav = true;
        }

        return sendResponse(['favorite' => $isFav], 'Favorite status toggled');
    }




}
