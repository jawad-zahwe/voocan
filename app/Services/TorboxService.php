<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class TorboxService
{
    protected $mainUrl;
    protected $searchUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->mainUrl   = config('services.torbox.main_url');
        $this->searchUrl = config('services.torbox.search_url');
        $this->apiKey    = config('services.torbox.key');
    }

    //  Get movie metadata from Search API
    public function getMeta(string $idType, string $id)
    {
        $response = Http::get("{$this->searchUrl}/meta/{$idType}:{$id}");
        // dd($response->json());
        return $response->json();
    }


}
