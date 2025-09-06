<?php

namespace App\Http\Controllers\User\Profiles;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\Profiles\verifyPinRequest;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileAPIController extends Controller
{
    public function index($user_id)
    {
        $user = User::with('profiles')->find($user_id);
        $profiles = $user->profiles;

        return sendResponse($profiles,'Profiles retrieved successfully');
    }

    public function store(Request $request, $user_id){

        $user = User::with(['profiles', 'subscriptionPlan'])->find($user_id);
        $currentProfileCount = $user->profiles->count();
        $maxProfiles = $user->subscriptionPlan->max_profiles;

        if ($currentProfileCount >= $maxProfiles) {
            return sendError("Profile limit reached. Maximum allowed is $maxProfiles");
        }

        $profileName = 'Profile ' . ($currentProfileCount + 1);
        $pin = rand(1000, 9999);
        $profile = Profile::create([
            'user_id' => $user_id,
            'name' => $profileName,
            'avatar' => null,
            'is_kid' => 0,
            'pin_code' => $pin ,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        return sendResponse($profile,'Profile created successfully');
    }

    public function verifyPin(verifyPinRequest $request, $profile_id)
{
    $data = $request->validated();

    $profile = Profile::find($profile_id);

    if ($profile->pin_code === $data['pin_code']) {
        $profile->is_active =true;
        $profile->save();
        return sendResponse($profile, 'PIN verified');
    }

    return sendError('Invalid PIN. Access denied');
}

}
