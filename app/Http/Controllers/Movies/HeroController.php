<?php

namespace App\Http\Controllers\Movies;

use App\Http\Controllers\Controller;
use App\Services\TorboxService;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    public function index(TorboxService $torbox)
    {
        // get 1917 movie
        $meta = $torbox->getMeta('imdb_id', 'tt8579674'); // 1917 IMDb ID
        $movie = $meta['data'] ?? [];

        return response()->json([
            'status' => 'success',
            'data' => [
                'id'          => $movie['tmdb_id'] ?? null,
                'title'       => $movie['title'] ?? 'Untitled',
                'description' => $movie['description'] ?? '',
                'poster'      => $movie['image'] ?? null,
                'backdrop'    => $movie['backdrop'] ?? null,
                'rating'      => $movie['rating'] ?? null,
                'genres'      => $movie['genres'] ?? [],
                'releasedDate'=> $movie['releasedDate'] ?? null,
                'runtime'     => $movie['runtime'] ?? null,
            ]
        ]);
    }

}
