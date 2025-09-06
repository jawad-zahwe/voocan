<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'username' =>['required' , 'string' , 'exists:users,name'],
            'password' =>['required' ,'string' , 'min:8'],
            'remember_me' => ['sometimes','boolean'],
        ];
    }

    public function messages(): array
    {
        return [
            'username.required' => 'Please enter your username.',
            'username.string' => 'Your username must be a valid string.',
            'username.exists' => 'This username is not registered in our system.',

            'password.required' => 'Please enter your password.',
            'password.string' => 'Your password must be a valid string.',
            'password.min' => 'Your password must be at least 8 characters long.',
        ];
    }


}
