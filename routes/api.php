<?php

use App\Http\Controllers\Api\Admin\Brand\BrandController;
use App\Http\Controllers\Api\Admin\Category\CategoryController;
use App\Http\Controllers\Api\Admin\Dashboard\DashboardController;
use App\Http\Controllers\Api\Admin\History\HistoryController;
use App\Http\Controllers\Api\Admin\Order\OrderController;
use App\Http\Controllers\Api\Admin\Product\ProductController;
use App\Http\Controllers\Api\Admin\Product\StockController;
use App\Http\Controllers\Api\Admin\Setting\SettingController;
use App\Http\Controllers\Api\Admin\User\AuthController;
use App\Http\Controllers\Api\Admin\User\CustomerController;
use App\Http\Controllers\Api\Admin\User\DriverController;
use App\Http\Controllers\Api\Admin\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/auth/login',[AuthController::class,'login']);
Route::post('/auth/logout',[AuthController::class,'logout']);

//protected routes
Route::middleware('auth:sanctum')->group(function (){
    //user
    Route::resource('user',UserController::class)->except('create','edit');
    Route::get('/user/search-user/{text}',[UserController::class,'datatableSearch']);
    Route::get('/user/card/card-data',[UserController::class,'administrationCardData']);
    Route::post('/user/change-password', [UserController::class, 'updatePassword'])->name('update-password');

    //driver
    Route::get('/driver',[DriverController::class,'index']);
    Route::get('/driver/search-driver/{text}',[DriverController::class,'datatableSearch']);

    //customer
    Route::get('/customer',[CustomerController::class,'index']);
    Route::get('/customer/search-customer/{text}',[CustomerController::class,'datatableSearch']);

    //category
    Route::resource('category',CategoryController::class)->except('create','edit');
    Route::get('/category/search-category/{text}',[CategoryController::class,'datatableSearch']);
    Route::get('/category/card/card-data',[CategoryController::class,'preRequisitionCardData']);

    //brand
    Route::resource('brand',BrandController::class)->except('create','edit');
    Route::get('/brand/search-brand/{text}',[BrandController::class,'datatableSearch']);
    Route::get('/brand/all/categories',[BrandController::class,'AllCategories']);

    //product
    Route::resource('product',ProductController::class)->except('create','edit');
    Route::get('/product/search-product/{text}',[ProductController::class,'datatableSearch']);
    Route::get('/product/search-product-for-stock-add/{text}',[ProductController::class,'searchProductForAddStock']);
    Route::get('/product/all/category-brand/{category_id}',[ProductController::class,'allBrandForCategory']);
    Route::get('/product/stock-history/{product_id}',[ProductController::class,'getProductHistory']);
    Route::get('/product/order-history/{product_id}',[ProductController::class,'productOrderHistoryData']);
    Route::get('/product/card/card-data',[ProductController::class,'productCardData']);

    //stock
    Route::post('/stock/stock-add',[StockController::class,'stockAdd'])->name('stock.add');

    //pending order
    Route::get('/order/pending-order',[OrderController::class,'pendingIndex']);
    Route::get('/order/search-pending-order/{text}',[OrderController::class,'pendingDatatableSearch']);
    Route::get('/order/card/card-data',[OrderController::class,'orderCardData']);

    //shipped order
    Route::get('/order/shipped-order',[OrderController::class,'shippedIndex']);
    Route::get('/order/search-shipped-order/{text}',[OrderController::class,'shippedDatatableSearch']);

    //delivered order
    Route::get('/order/delivered-order',[OrderController::class,'deliveredIndex']);
    Route::get('/order/search-delivered-order/{text}',[OrderController::class,'deliveredDatatableSearch']);

    //canceled order
    Route::get('/order/canceled-order',[OrderController::class,'canceledIndex']);
    Route::get('/order/search-canceled-order/{text}',[OrderController::class,'canceledDatatableSearch']);

    //rejected order
    Route::get('/order/rejected-order',[OrderController::class,'rejectedIndex']);
    Route::get('/order/search-rejected-order/{text}',[OrderController::class,'rejectedDatatableSearch']);

    //frontend recent order & order history api
    Route::get('/order/recent-order',[OrderController::class,'recentOrder']);
    Route::get('/order/order-history',[OrderController::class,'orderHistory']);

    //order
    Route::resource('order',OrderController::class)->except('create','edit','update','store','destroy');
    Route::get('/order/search-order/{text}',[OrderController::class,'datatableSearch']);
    Route::post('/order/change-status/{id}',[OrderController::class,'changeStatus']);

    //dashboard
    Route::get('/sale-doughnut-data',[DashboardController::class,'saleDoughnutChartData']);
    Route::get('/sale-graph-chart-data',[DashboardController::class,'saleGraphChartData']);
    Route::get('/stock-price-bar-chart-data',[DashboardController::class,'orderPriceBarChartData']);
    Route::get('/recent-order-limit',[DashboardController::class,'recentOrderData']);
    Route::get('/dashboard-card-data',[DashboardController::class,'dashboardCardData']);
    Route::get('/last-order-history-data',[DashboardController::class,'lastProductOrderHistoryData']);

    ## History
    Route::get('/history/get/last-five', [HistoryController::class, 'getLastFive']);

    ## Settings
    Route::post('/setting/save', [SettingController::class, 'saveSettings']);
    Route::get('/setting/get',[SettingController::class,'getAllSettings']);
});

/*
  Public API Routes
*/
Route::group(['prefix' => 'v1'], function(){

    //user route
    Route::post('/registration',[\App\Http\Controllers\Api\Client\User\AuthController::class,'registration']);
    Route::post('/login',[\App\Http\Controllers\Api\Client\User\AuthController::class,'login']);
    Route::post('/logout',[\App\Http\Controllers\Api\Client\User\AuthController::class,'logout']);

    //category route
    Route::get('/category',[\App\Http\Controllers\Api\Client\Category\CategoryController::class,'index']);
    Route::get('/category/{slug}',[\App\Http\Controllers\Api\Client\Category\CategoryController::class,'details']);
    Route::get('/category/front/product/{id}',[\App\Http\Controllers\Api\Client\Category\CategoryController::class,'categoryProduct']);
    Route::get('/category/front/category-brand',[\App\Http\Controllers\Api\Client\Category\CategoryController::class,'categoryBrand']);

    //brand route
    Route::get('/brand',[\App\Http\Controllers\Api\Client\Brand\BrandController::class,'index']);
    Route::get('/brand/{slug}',[\App\Http\Controllers\Api\Client\Brand\BrandController::class,'details']);
    Route::get('/brand/front/product/{id}',[\App\Http\Controllers\Api\Client\Brand\BrandController::class,'brandProduct']);

    //product route
    Route::get('/product',[\App\Http\Controllers\Api\Client\Product\ProductController::class,'index']);
    Route::get('/product/{slug}',[\App\Http\Controllers\Api\Client\Product\ProductController::class,'details']);
    Route::get('/product/get/search-products', [\App\Http\Controllers\Api\Client\Product\ProductController::class, 'getSearchedProduct']);

    //order route
    Route::post('/order',[\App\Http\Controllers\Api\Client\Order\OrderController::class,'store']);
    Route::get('/order',[\App\Http\Controllers\Api\Client\Order\OrderController::class,'index']);
    Route::get('/order/{id}',[\App\Http\Controllers\Api\Client\Order\OrderController::class,'details']);
    Route::get('/order/last-five-order/{id}',[\App\Http\Controllers\Api\Client\Order\OrderController::class,'customerLastFiveOrder']);
    Route::get('/order/all-order/{id}',[\App\Http\Controllers\Api\Client\Order\OrderController::class,'customerAllOrder']);

    ## Settings
    Route::get('/setting/front/get',[SettingController::class,'getAllSettings']);

    ##customer
    Route::post('/customer/profile-update/{id}',[\App\Http\Controllers\Api\Client\User\UserController::class,'updateProfile']);

    Route::get('/customer/details/{id}',[\App\Http\Controllers\Api\Client\User\UserController::class,'getUserData']);

});

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
