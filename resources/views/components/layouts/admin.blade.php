<x-layouts.main>
    <div class="flex h-screen bg-slate-100">
        <aside class="bg-black w-72 flex-shrink-0">

            <div class="p-6 flex items-center">
                <img class="w-8 aspect-square" src="{{ asset('/assets/images/foodflow-3.png') }}"/>
                <div class="ml-4 text-white text-2xl font-semibold italic">FoodFlow</div>
            </div>

            <div class="p-6 flex flex-col gap-2">
                <a class="py-2 px-4 text-white font-medium w-full hover:bg-slate-700" href="#">
                    Dashboard
                </a>
                <a class="py-2 px-4 text-white font-medium w-full hover:bg-slate-700" href="#">
                    Sales
                </a>
                <a class="py-2 px-4 text-white font-medium w-full hover:bg-slate-700" href="#">
                    Categories
                </a>
                <a class="py-2 px-4 text-white font-medium w-full hover:bg-slate-700" href="#">
                    Products
                </a>
                <a class="py-2 px-4 text-white font-medium w-full hover:bg-slate-700" href="#">
                    Users
                </a>
            </div>

        </aside>
        <div class="flex-grow">
            <div class="w-full bg-white p-4 sticky top-0 z-10 flex justify-end">
                <div class="flex items-center gap-4">
                    <div class="text-right">
                        <div>Lenard Mangay-ayam</div>
                        <div class="text-slate-500">Admin</div>
                    </div>
                    <img class="h-12 aspect-square" src="https://demo.tailadmin.com/src/images/user/user-01.png" />
                </div>
            </div>
        </div>
    </div>
</x-layout.main>