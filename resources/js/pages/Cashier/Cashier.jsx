

export default function Cashier() {
    return (
        <div className="flex h-full">
            <div className="flex-grow p-8 overflow-y-auto thin-scrollbar">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-slate-800 text-2xl font-bold">Welcome, Garry</h1>
                        <div className="text-sm text-slate-500">Discover whatever you need easily</div>
                    </div>
                    <div>
                        <div className="bg-white py-2 px-3 shadow-sm w-64 focus-within:w-80 transition-all font-light focus-within:shadow-md">
                            <i className="far fa-search text-slate-500" />
                            <input className="focus:outline-none ml-2" type="search" placeholder="Search product" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex gap-4">
                    <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">Breakfast</button>
                    <button className="bg-primary text-white py-3 px-6 font-bold text-sm shadow-md">Burgers</button>
                    <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">Platters</button>
                    <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">Fries</button>
                    <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">Drinks &amp; Desserts</button>
                    <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">Cafe</button>
                </div>
                <div className="mt-6 flex gap-4 flex-wrap">

                    <div className="bg-white p-2 w-60 shadow">
                        <div className="relative">
                            <img className="aspect-video object-cover" src="https://via.placeholder.com/400x300" />
                        </div>
                        <h4 className="mt-3 font-bold text-slate-700 leading-5">Almond Brown Sugar Croissant</h4>
                        <div className="mt-3 text-sm text-slate-500 font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                        </div>
                        <div className="mt-3 flex items-end">
                            <div className="font-bold text-xl text-primary">₱45.00</div>
                            <div className="text-sm text-slate-500 font-semibold"> / 3pcs</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-white w-80 flex-shrink-0 shadow-sm p-4 py-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <h1 className="text-slate-800 text-2xl font-bold">Current Order</h1>
                    <button className="bg-slate-100 p-1 px-3 shadow-sm">
                        <i className="far fa-trash text-sm text-slate-500 block" />
                    </button>
                </div>
                <div className="mt-8 flex-grow">
                    <div className="flex flex-col gap-6">

                        <div className="flex">
                            <img className="w-20 aspect-square flex-shrink-0 rounded" src="https://via.placeholder.com/300x300" />
                            <div className="flex-grow px-2 flex flex-col justify-between">
                                <div className="font-bold text-slate-700 leading-5">Smoke Tenderloin Slice Croissant</div>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold text-primary-400">₱96.00</div>
                                    <div className="flex items-center">
                                        <button className="bg-primary-400 text-white p-1 px-2">
                                            <i className="far fa-minus text-xs block" />
                                        </button>
                                        <div className="px-3">1</div>
                                        <button className="bg-primary-400 text-white p-1 px-2">
                                            <i className="far fa-plus text-xs block" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-4">
                    <div className="bg-slate-100 p-4">
                        <div className="flex justify-between text-sm">
                            <div className="text-slate-500">Subtotal</div>
                            <div className="text-slate-700 font-bold">₱345.25</div>
                        </div>
                    </div>
                    <button className="w-full bg-primary text-white py-2 mt-4">Process Order</button>
                </div>
            </div>
        </div>
    )
}