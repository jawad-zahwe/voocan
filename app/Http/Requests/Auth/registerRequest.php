<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class registerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required','string','max:100','unique:users,name'],
            'email' => ['required','email','unique:users,email'],
            'password' => ['required','min:8', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/', 'confirmed'],
            'coupon_code' => ['sometimes','string'],
            'referral_code' => ['sometimes','string'],
            'subscription_plan_id' => ['required', 'integer', 'exists:subscription_plans,id'],

        ];
    }

    public function messages(): array
{
    return [
        'name.required' => 'Name is required.',
        'name.string' => 'Name must be a string.',
        'name.max' => 'Name may not be greater than 100 characters.',
        'name.unique' => 'This name is already registered.',
        
        'email.required' => 'Email is required.',
        'email.email' => 'Email must be a valid email address.',
        'email.unique' => 'This email is already taken.',

        'password.required' => 'Password is required.',
        'password.min' => 'Password must be at least 8 characters.',
        'password.regex' => 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
        'password.confirmed' => 'Password confirmation does not match.',

        'coupon_code.string' => 'Coupon code must be a string.',

        'referral_code.string' => 'Referral code must be a string.',

        'subscription_plan_id.required' => 'Please select a subscription plan.',
        'subscription_plan_id.integer' => 'Subscription plan must be a valid ID.',
        'subscription_plan_id.exists' => 'Selected subscription plan does not exist.',
    ];
}
}
