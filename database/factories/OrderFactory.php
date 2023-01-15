<?php

namespace Database\Factories;

use App\Models\User;
use App\Utils\GlobalConstant;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $user_id = User::where('user_type', User::USER_TYPE_CUSTOMER)->get()->random()->id;
        $user = User::where('id', $user_id)->first();
        $subtotal = rand(1000,3000);
        $shipping_charge = config('settings.admin_shipping_charge');
        $random_month = rand(1,11);
        $created_at = Carbon::parse($this->faker->dateTimeThisMonth())->addMonths($random_month);
        return [
            'user_id'=>$user_id,
            'total_product_quantity'=>rand(20,50),
            'subtotal'=>$subtotal,
            'shipping_type'=>'shipping',
            'shipping_charge'=>$shipping_charge,
            'total_price'=>$subtotal + $shipping_charge,
            'SKU'=>$this->faker->numerify('##########'),
            'address'=>$this->faker->address(),
            'whats_app_number'=>$user->phone,
            'status'=>$this->faker->randomElement([
                GlobalConstant::ORDER_STATUS_PENDING,
                GlobalConstant::ORDER_STATUS_DELIVERED,
                GlobalConstant::ORDER_STATUS_SHIPPED,
                GlobalConstant::ORDER_STATUS_CANCELED,
                GlobalConstant::ORDER_STATUS_REJECTED,
            ]),
            'created_at'=>$created_at
        ];
    }
}
