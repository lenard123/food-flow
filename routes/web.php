<?php

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

Route::view('/login', 'pages.login');
Route::view('/orders', 'pages.cashier.orders');
Route::view('/home', 'pages.cashier.home');
Route::view('/products', 'pages.cashier.products');

Route::view('/admin', 'pages.admin.dashboard');
Route::view('/admin/categories', 'pages.admin.categories');
Route::view('/admin/categories/new', 'pages.admin.categories-new');
Route::view('/admin/products', 'pages.admin.products');
Route::view('/admin/products/new', 'pages.admin.products-new');
Route::view('/admin/users', 'pages.admin.users');
Route::view('/admin/users/new', 'pages.admin.users-new');