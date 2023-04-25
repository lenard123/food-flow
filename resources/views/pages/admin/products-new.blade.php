<x-layouts.admin>
    <form class="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
        <h1 class="text-xl font-bold text-black mb-4">Add New Product</h1>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-name">
                Product Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-name" type="text" placeholder="Enter product name">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-description">
                Product Description
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-description" rows="4" placeholder="Enter product description"></textarea>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-image">
                Product Image
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-image" type="file" accept="image/*">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-price">
                Product Price
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-price" type="number" step="0.01" placeholder="Enter product price">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="product-category">
                Product Category
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="product-category">
                <option>Select a category</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
            </select>
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Add Product
            </button>
        </div>
    </form>

</x-layouts.admin>
