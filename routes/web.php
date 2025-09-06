<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\User\Profiles\ProfileAPIController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'check.auth.token'])->name('dashboard');

Route::get('/choose-profile', function () {
    return Inertia::render('ChooseProfile');
})->middleware(['check.auth.token'])->name('choose-profile');

Route::get('/pin', function () {
    return Inertia::render('PinCode');
})->middleware(['check.auth.token'])->name('pin');

// Route للتحقق من PIN
Route::post('/profiles/{profile_id}/verify-pin', [ProfileAPIController::class, 'verifyPin'])
    ->middleware(['check.auth.token']);

Route::get('/logout', function () {
    try {
        Auth::logout();
    } catch (\Throwable $e) {}
    request()->session()->invalidate();
    request()->session()->regenerateToken();
    return redirect()->route('login');
})->name('logout');


require __DIR__.'/auth.php';
