<x-layouts.admin>
    <div class="p-4">

        <h1 class="text-2xl font-bold text-black">Manage Products</h1>

        <div class="bg-white shadow p-4 mt-4">
            <div class="flex justify-between items-center px-4">
                <h1 class="text-xl font-bold text-black">Products</h1>
                <a href="{{ url('/admin/products/new') }}" class="bg-primary py-3 text-sm px-6 text-white">Add New Product</a>
            </div>
            <table class="min-w-full divide-y divide-gray-200 mt-4">
                <thead>
                    <tr>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product Image
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product Name
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex-shrink-0 h-20 w-20">
                                <img class="h-20 w-20 object-cover" src="https://via.placeholder.com/150"
                                    alt="Product image">
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">
                                Product 1
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">$10.00</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex-shrink-0 h-20 w-20">
                                <img class="h-20 w-20 object-cover" src="https://via.placeholder.com/150"
                                    alt="Product image">
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">
                                Product 1
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">$10.00</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>


    </div>
</x-layouts.admin>
