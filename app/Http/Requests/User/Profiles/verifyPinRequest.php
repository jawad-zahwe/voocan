<?php

namespace App\Http\Requests\User\Profiles;

use Illuminate\Foundation\Http\FormRequest;

class verifyPinRequest extends FormRequest
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
            'pin_code' => 'required|string|digits:4'
        ];
    }


    public function messages(): array
{
    return [
        'pin_code.required' => 'The PIN code is required.',
        'pin_code.string' => 'The PIN code must be a string.',
        'pin_code.digits' => 'The PIN code must be exactly 4 digits.',
    ];
}
}
