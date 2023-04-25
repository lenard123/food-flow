<x-layouts.admin>
    <div class="p-4">

        <h1 class="text-2xl font-bold text-black">Manage Categories</h1>

        <div class="bg-white shadow p-4 mt-4">
            <div class="flex justify-between items-center px-4">
                <h1 class="text-xl font-bold text-black">Categories</h1>
                <a href="{{ url('/admin/categories/new') }}" class="bg-primary py-3 text-sm px-6 text-white">Add New Category</a>
            </div>
            <table class="mt-4 min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category Name
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
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
                            <div class="flex items-center">
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                        Category 1
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                        Category 2
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore
                                magna
                                aliqua.</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
                        </td>
                    </tr>
                    <!-- More categories here -->
                </tbody>
            </table>
        </div>


    </div>
</x-layouts.admin>
