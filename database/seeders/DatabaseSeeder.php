<?php

namespace Database\Seeders;

use App\Models\History;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\User;
use bfinlay\SpreadsheetSeeder\SpreadsheetSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            BrandSeeder::class,
            SettingSeeder::class,
            SpreadsheetSeeder::class,
        ]);
        //User::factory(100)->create();
//        Order::factory(500)->create();
//        History::factory(600)->create();
//        OrderProduct::factory(1500)->create();
    }
}
