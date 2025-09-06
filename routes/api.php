<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Movies\FavoriteController;
use App\Http\Controllers\Movies\HeroController;
use App\Http\Controllers\User\Profiles\ProfileAPIController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::middleware(['auth:sanctum', \App\Http\Middleware\CheckTokenExpiration::class])
    ->post('/logout', [LogoutController::class, 'logout']);


Route::middleware(['auth:sanctum', \App\Http\Middleware\CheckTokenExpiration::class])
    ->get('/test-token', function (\Illuminate\Http\Request $request) {
        return response()->json([
            'success' => true,
            'message' => 'Token is valid!',
            'user' => $request->user(),
        ]);
    });

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users/{user_id}/profiles', [ProfileAPIController::class, 'index']);
    Route::post('/users/{user_id}/profiles', [ProfileAPIController::class, 'store']);
    Route::post('/profiles/{profile_id}/verify-pin', [ProfileAPIController::class, 'verifyPin']);

    Route::get('/hero', [HeroController::class, 'index']);
    Route::post('/profiles/{profile}/movies/{movie}/favorite', [FavoriteController::class, 'toggleFavorite']);
});

