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
            ['name'=>'todos','thumbnail'=>'','banner'=>''],
            ['name'=>'salud y medicina','thumbnail'=>'','banner'=>''],
            ['name'=>'belleza','thumbnail'=>'','banner'=>''],
            ['name'=>'cuidado del bebé','thumbnail'=>'','banner'=>''],
            ['name'=>'cuidado personal','thumbnail'=>'','banner'=>''],
            ['name'=>'alimentos y bebidas','thumbnail'=>'','banner'=>''],
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
