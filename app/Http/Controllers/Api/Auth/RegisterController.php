<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\registerRequest;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(registerRequest $request){
        $data = $request->validated();
        $pin = rand(1000, 9999);
        $user = User::create($data);
        $profile = Profile::create([
            'user_id' => $user->id,
            'name' => 'Profile 1',
            'avatar' => null,
            'is_kid' => 0,
            'pin_code' => $pin ,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        return sendResponse($user , 'user register successfully');

    }
}
