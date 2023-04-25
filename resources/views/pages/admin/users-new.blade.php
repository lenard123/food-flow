<x-layouts.admin>
    <form class="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-4">
        <h1 class="text-xl font-bold text-black mb-4">Add New User</h1>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="first-name">
                First Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name" type="text" placeholder="Enter first name">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="last-name">
                Last Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name" type="text" placeholder="Enter last name">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-image">
                User Image
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="user-image" type="file" accept="image/*">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-role">
                User Role
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="user-role">
                <option>Select a role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
            </select>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-email">
                User Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="user-email" type="email" placeholder="Enter user email">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="user-password">
                User Password
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="user-password" type="password" placeholder="Enter user password">
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Add User
            </button>
        </div>
    </form>

</x-layouts.admin>
