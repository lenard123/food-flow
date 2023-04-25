<x-layouts.admin>
    <form class="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">

        <h1 class="text-xl font-bold text-black mb-4">Add New Category</h1>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="category-name">
            Category Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category-name" type="text" placeholder="Enter category name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="category-description">
            Category Description
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category-description" rows="4" placeholder="Enter category description"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Create Category
          </button>
        </div>
      </form>
      
</x-layouts.admin>