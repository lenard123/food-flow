<x-layouts.cashier>

    <div class="flex h-full">
        <div class="flex-grow p-8">
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="text-slate-800 text-2xl font-bold">Welcome, Garry</h1>
                    <div class="text-sm text-slate-500">Discover whatever you need easily</div>
                </div>
                <div>
                    <div
                        class="bg-white py-2 px-3 shadow-sm w-64 focus-within:w-80 transition-all font-light focus-within:shadow-md">
                        <i class="far fa-search text-slate-500"></i>
                        <input class="focus:outline-none ml-2" type="search" placeholder="Search product" />
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white w-80 flex-shrink-0 shadow-sm p-4 py-8 flex flex-col">
            <div class="flex justify-between items-center">
                <h1 class="text-slate-800 text-2xl font-bold">Current Order</h1>
                <button class="bg-slate-100 p-1 px-3 shadow-sm">
                    <i class="far fa-trash text-sm text-slate-500 block"></i>
                </button>
            </div>

            <div class="mt-8 flex-grow">
                <div class="flex flex-col gap-6">
                    @for ($i = 0; $i < 3; $i++)
                        <div class="flex">
                            <img class="w-20 aspect-square flex-shrink-0 rounded"
                                src="https://via.placeholder.com/300x300">
                            <div class="flex-grow px-2 flex flex-col justify-between">
                                <div class="font-bold text-slate-700 leading-5">Smoke Tenderloin Slice Croissant</div>
                                <div class="flex justify-between items-center">
                                    <div class="font-bold text-primary-400">₱96.00</div>
                                    <div class="flex items-center">
                                        <button class="bg-primary-400 text-white p-1 px-2">
                                            <i class="far fa-minus text-xs block"></i>
                                        </button>
                                        <div class="px-3">1</div>
                                        <button class="bg-primary-400 text-white p-1 px-2">
                                            <i class="far fa-plus text-xs block"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endfor
                </div>
            </div>

            <div class="mt-4">
                <div class="bg-slate-100 p-4">
                    <div class="flex justify-between text-sm">
                        <div class="text-slate-500">Subtotal</div>
                        <div class="text-slate-700 font-bold">₱345.25</div>
                    </div>
                </div>
                <button class="w-full bg-primary text-white py-2 mt-4">Process Order</button>
            </div>
        </div>
    </div>


</x-layouts.cashier>
