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
            ['name'=>'Todos','thumbnail'=>'','banner'=>''],
            ['name'=>'OFERTAS HASTA DICIEMBRE','thumbnail'=>'','banner'=>''],
            ['name'=>'OCTUBRE ROSA','thumbnail'=>'','banner'=>''],
            ['name'=>'OFERTAS DEL MES','thumbnail'=>'','banner'=>''],
            ['name'=>'Health & Medicine','thumbnail'=>'','banner'=>''],
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
