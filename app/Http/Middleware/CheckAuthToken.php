<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class CheckAuthToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->query('token') ?? $request->session()->get('access_token');

        if (!$token) {
            return redirect('/login');
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if (!$accessToken) {
            $request->session()->forget(['access_token', 'user']);
            return redirect('/login');
        }

        if ($accessToken->expires_at && $accessToken->expires_at->isPast()) {
            $accessToken->delete();
            try { Auth::guard('web')->logout(); } catch (\Throwable $e) {}
            try { $request->session()->invalidate(); $request->session()->regenerateToken(); } catch (\Throwable $e) {}
            return redirect('/login');
        }

        if (!Auth::check()) {
            Auth::loginUsingId($accessToken->tokenable_id);
        }

        $request->session()->put('access_token', $token);

        return $next($request);
    }
}

