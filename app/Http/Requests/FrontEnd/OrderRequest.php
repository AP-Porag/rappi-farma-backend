<?php

namespace App\Http\Requests\FrontEnd;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "first_name" => 'required',
            "last_name" => 'required',
            "email" => 'required',
            "phone" => 'required',
            "address" => 'required',
            "city" => 'required',
            "country" => 'required',
            "zip_code" => 'required',
            "total_quantity" => 'required',
            "subtotal" => 'required',
            "shippingCharge" => 'required',
            "whatsapp" => 'required',
            "shipping_type" => 'required',
            "discount_type" => 'nullable',
            "discount_amount" => 'nullable',
            "total_price" => 'required',
            "products" =>  'required|array',
        ];

    }
}
