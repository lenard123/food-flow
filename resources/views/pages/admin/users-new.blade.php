<x-layouts.admin>
    <form action="{{ url('/admin/users') }}" method="POST" enctype="multipart/form-data" class="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
        @csrf
        <h1 class="text-xl font-bold text-black mb-4">Add New User</h1>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="first-name">
                First Name
            </label>
            <input name="firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="Enter first name">
            @error('firstname')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="last-name">
                Last Name
            </label>
            <input name="lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Enter last name">
            @error('lastname')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-image">
                User Image
            </label>
            <input name="image" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user-image" type="file" accept="image/*">
            @error('image')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-role">
                User Role
            </label>
            <select name="role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user-role">
                <option>Select a role</option>
                <option value="admin">Admin</option>
                <option value="cashier">Cashier</option>
            </select>
            @error('role')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-email">
                User Email
            </label>
            <input name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user-email" type="email" placeholder="Enter user email">
            @error('email')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-password">
                User Password
            </label>
            <input name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user-password" type="password" placeholder="Enter user password">
            @error('password')
                <p class="text-red-500 text-xs italic mt-1">{{ $message }}</p>
            @enderror
        </div>
        <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Add User
            </button>
        </div>
    </form>

</x-layouts.admin>