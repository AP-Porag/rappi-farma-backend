<?php

use App\Utils\GlobalConstant;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained('categories')->onDelete('set null');
            $table->foreignId('brand_id')->nullable()->constrained('brands')->onDelete('set null');
            $table->string('name');
            $table->string('slug');
            $table->string('short_description')->nullable();
            $table->string('description')->nullable();
            $table->string('price')->nullable();
            $table->string('SKU')->nullable();
            $table->string('current_stock')->nullable()->default(0);
            $table->string('discount')->nullable();
            $table->string('discount_type')->nullable();
            $table->string('unit')->nullable();
            $table->string('status')->nullable()->default(GlobalConstant::STATUS_ACTIVE);
            $table->string('thumbnail')->nullable();
            $table->foreignId('created_by')->nullable()->constrained('users')->onDelete('set null');
            $table->foreignId('updated_by')->nullable()->constrained('users')->onDelete('set null');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
