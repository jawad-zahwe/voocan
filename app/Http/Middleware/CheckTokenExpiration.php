<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckTokenExpiration
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user && $user->currentAccessToken()) {
            $token = $user->currentAccessToken();

            if (property_exists($token, 'expires_at') && $token->expires_at && $token->expires_at->isPast()) {
                $token->delete();
                try {
                    Auth::guard('web')->logout();
                } catch (\Throwable $e) {}
                try {
                    $request->session()->invalidate();
                    $request->session()->regenerateToken();
                } catch (\Throwable $e) {}
                return response()->json([
                    'msg' => 'token expired',
                    'success' => false
                ], 401);
            }
        }
        

        return $next($request);
    }
}
