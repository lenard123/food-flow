<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        return Product::when($request->has('category_id'), function ($query) use ($request){
            $query->where('category_id', $request->category_id);
        })->get();
    }
}
