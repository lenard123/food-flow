<x-layouts.admin>
    <form method="POST" action="{{ url('/admin/products') }}" enctype="multipart/form-data"
        class="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
        @csrf
        <h1 class="text-xl font-bold text-black mb-4">Add New Product</h1>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">
                Product Name
            </label>
            <input name="name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-name" type="text" placeholder="Enter product name">
            @error('name')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-description">
                Product Description
            </label>
            <textarea name='description'
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-description" rows="4" placeholder="Enter product description"></textarea>
            @error('description')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-image">
                Product Image
            </label>
            <input name="image"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-image" type="file" accept="image/*">
            @error('image')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-price">
                Product Price
            </label>
            <input name="price"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-price" type="number" step="0.01" placeholder="Enter product price">
            @error('price')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-category">
                Product Category
            </label>
            <select name="category_id"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-category">
                <option>Select a category</option>
                @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                @endforeach

            </select>
            @error('category_id')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Add Product
            </button>
        </div>
    </form>

</x-layouts.admin>
