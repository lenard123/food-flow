<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return view('pages.admin.products', [
            'products' => Product::with('category')->get()
        ]);
    }

    public function create()
    {
        return view('pages.admin.products-new', [
            'categories' => Category::all()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:255',
            'description' => 'nullable',
            'category_id' => 'required|exists:categories,id',
            'price' => 'required|numeric|min:0',
            'image' => 'required|image|max:2048',
        ]);

        $imagePath = $request->file('image')->store('products', 'public');

        Product::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'category_id' => $data['category_id'],
            'price' => $data['price'],
            'image' => $imagePath,
        ]);

        return redirect('/admin/products')->with('success', 'Product created successfully.');
    }
}
