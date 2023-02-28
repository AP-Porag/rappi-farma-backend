<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = $this->faker->randomElement(['male', 'female']);
        return [
            'first_name' => $this->faker->firstName($gender),
            'last_name' => $this->faker->lastName(),
            'username' => $this->faker->unique()->userName(),
            'email' => $this->faker->unique()->safeEmail(),
            'gender' => $gender,
            'phone'             => '1828963235',
            'country_code'      => 'BD',
            'country_calling_code'=>'880',
            'user_type'=>User::USER_TYPE_CUSTOMER,
            'email_verified_at' => now(),
            'password' => '$2y$10$mmv2lR.uMmhG.EC9FQEirO4YrLtjqATfmzDPwIPKLIDLSCNhPtVqu', // 12345678
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
