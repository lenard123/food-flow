<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/login', 'pages.login')->name('login')->middleware('guest');
Route::post('/login', [LoginController::class, 'login'])->middleware('guest');

Route::group(['middleware' => 'auth'], function() {

    Route::post('/logout', [LoginController::class, 'logout']);

    Route::group(['middleware' => 'cashier'], function () {
        Route::view('/', 'pages.cashier.orders');
        Route::view('/products', 'pages.cashier.products');
    });

    Route::group(['middleware' => 'admin'], function () {
        Route::view('/admin', 'pages.admin.dashboard');

        Route::get('/admin/categories', [CategoryController::class, 'index']);
        Route::post('/admin/categories', [CategoryController::class, 'store']);
        Route::view('/admin/categories/new', 'pages.admin.categories-new');

        Route::get('/admin/products', [ProductController::class, 'index']);
        Route::get('/admin/products/new', [ProductController::class, 'create']);
        Route::post('/admin/products', [ProductController::class, 'store']);

        Route::view('/admin/users', 'pages.admin.users');
        Route::view('/admin/users/new', 'pages.admin.users-new');
    });

});
