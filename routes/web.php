<?php

use App\Http\Controllers\Api\Admin\Dashboard\DashboardController;
use App\Http\Controllers\Api\Admin\Setting\SettingController;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*')->name('web');

//Route::get('/sale-doughnut-data',[DashboardController::class,'saleDoughnutChartData']);
//Route::get('/sale-graph-chart-data',[DashboardController::class,'saleGraphChartData']);
//Route::get('/stock-price-bar-chart-data',[DashboardController::class,'orderPriceBarChartData']);
//Route::get('/recent-order-limit',[DashboardController::class,'recentOrderData']);
//Route::get('/setting',[SettingController::class,'getAllSettings']);

Route::post('/broadcast',function (Request $request){
    return true;
});
