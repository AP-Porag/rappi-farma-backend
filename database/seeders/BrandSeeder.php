<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = [
            ['category_id'=>'5','name'=>'Genfar','thumbnail'=>'Genfar.png'],
            ['category_id'=>'5','name'=>'Sanofi','thumbnail'=>'Sanofi.png'],
            ['category_id'=>'1','name'=>'Loreal','thumbnail'=>'Loreal.png'],
            ['category_id'=>'1','name'=>'Vogue','thumbnail'=>'Vogue.png'],
            ['category_id'=>'2','name'=>'Garnier','thumbnail'=>'Garnier.png'],
            ['category_id'=>'1','name'=>'Nivea','thumbnail'=>'Nivea.png'],
            ['category_id'=>'3','name'=>'P&G','thumbnail'=>'P&G.png'],
            ['category_id'=>'4','name'=>'Johnsons','thumbnail'=>'Johnsons.png'],
        ];
        foreach ($brands as $brand){
            $items = [
                [
                    'name'        => $brand['name'],
                    'slug'        => Str::slug($brand['name']),
                    'category_id'      => $brand['category_id'],
                    'thumbnail'      => $brand['thumbnail'],
                    'status'      => 'active',
                ],
            ];
            foreach ($items as $item) {
                Brand:: create($item);
            }
        }
    }
}
