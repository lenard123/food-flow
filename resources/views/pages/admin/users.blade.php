<x-layouts.admin>
    <div class="p-4">

        <h1 class="text-2xl font-bold text-black">Manage Users</h1>

        <div class="bg-white shadow p-4 mt-6">
            <div class="flex justify-between items-center px-4">
                <h1 class="text-xl font-bold text-black">Users</h1>
                <a href="{{ url('/admin/users/new') }}" class="bg-primary py-3 text-sm px-6 text-white">Add New User</a>
            </div>
            <table class="min-w-full divide-y divide-gray-200 mt-4">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User Image
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Full Name
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
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
                            <div class="flex-shrink-0 h-12 w-12">
                                <img class="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/150"
                                    alt="User image">
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">
                                John Doe
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">Admin</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                            <a href="#" class="text-red-600 hover:text-red-900 ml-4">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex-shrink-0 h-12 w-12">
                                <img class="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/150"
                                    alt="User image">
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">
                                Jane Doe
                            </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-500">User</div>
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
