<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name'=>'todos','thumbnail'=>'todos.png','banner'=>'banner-2.jpeg'],
            ['name'=>'salud y medicina','thumbnail'=>'health_medicine_icon.png','banner'=>'banner-1.jpeg'],
            ['name'=>'belleza','thumbnail'=>'beauty_icon.png','banner'=>'banner-3.jpeg'],
            ['name'=>'cuidado del bebé','thumbnail'=>'baby_care.png','banner'=>'banner-4.jpeg'],
            ['name'=>'cuidado personal','thumbnail'=>'personal_care.png','banner'=>'banner-5.jpeg'],
            ['name'=>'alimentos y bebidas','thumbnail'=>'food_drinks.png','banner'=>'banner-6.jpeg'],
        ];
        foreach ($categories as $category){
            $items = [
                [
                    'name'        => $category['name'],
                    'slug'        => Str::slug($category['name']),
                    'thumbnail'      => $category['thumbnail'],
                    'banner'      => $category['banner'],
                    'status'      => 'active',
                ],
            ];
            foreach ($items as $item) {
                Category:: create($item);
            }
        }

    }
}
