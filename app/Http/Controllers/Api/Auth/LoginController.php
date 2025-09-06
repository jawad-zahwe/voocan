<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(LoginRequest $request){
        $data = $request->validated();

        $user = User::where('name',$data['username'])->first();

        if(!Hash::check( $data['password'], $user->password)){
            return sendError('Invalid username or password ');
        }

        $remember = $data['remember_me'] ?? false;

        $expiration = $remember ? now()->addDays(15) : now()->addHour();

        $token = $user->createToken('api-token', ['*'], $expiration)->plainTextToken;

        $user->access_token = $token;

        return sendResponse($user , 'user logged in successfully');
    }
}
