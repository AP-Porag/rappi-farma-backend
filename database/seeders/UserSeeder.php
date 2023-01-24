<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'first_name'        => 'Super',
                'last_name'         => 'Admin',
                'email'             => 'admin@app.com',
                'email_verified_at' => now(),
                'password'          => '$2y$10$mmv2lR.uMmhG.EC9FQEirO4YrLtjqATfmzDPwIPKLIDLSCNhPtVqu',   // 12345678
                'user_type'         => User::USER_TYPE_ADMIN,
                'gender'            => 'male',
                'remember_token'    => Str::random(60),
                'phone'             => '012345678910',
                'date_of_birth'     => '2000-10-21',
            ],
            [
                'first_name'        => 'Driver',
                'last_name'         => 'Last',
                'email'             => 'driver@app.com',
                'email_verified_at' => now(),
                'password'          => '$2y$10$mmv2lR.uMmhG.EC9FQEirO4YrLtjqATfmzDPwIPKLIDLSCNhPtVqu',   // 12345678
                'user_type'         => User::USER_TYPE_DRIVER,
                'gender'            => 'male',
                'remember_token'    => Str::random(60),
                'phone'             => '012345678910',
                'date_of_birth'     => '2000-10-21',
            ],
            [
                'first_name'        => 'Customer',
                'last_name'         => 'Last',
                'email'             => 'customer@app.com',
                'email_verified_at' => now(),
                'password'          => '$2y$10$mmv2lR.uMmhG.EC9FQEirO4YrLtjqATfmzDPwIPKLIDLSCNhPtVqu',   // 12345678
                'user_type'         => User::USER_TYPE_CUSTOMER,
                'gender'            => 'male',
                'remember_token'    => Str::random(60),
                'phone'             => '+8801828963235',
                'date_of_birth'     => '2000-10-21',
            ],
        ];


        foreach ($users as $user) {
            User:: create($user);
        }
    }
}
