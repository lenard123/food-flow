

export default function Orders() {
    return (
        <div className="p-8 overflow-y-auto thin-scrollbar">
            <h1 className="text-slate-800 text-2xl font-bold">Manage Orders</h1>
            <div className="text-sm text-slate-500">Efficiently Manage Your Sales Orders</div>
            <div className="mt-6 flex gap-4">
                <button className="bg-primary text-white py-3 px-6 font-bold text-sm shadow-md">Pending Orders</button>
                <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">Completed</button>
            </div>
            <div className="mt-6">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Order Header */}
                    <div className="px-6 py-4 bg-white flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">Order #123456</h3>
                            <p className="text-sm text-gray-500">Placed on April 26, 2023</p>
                        </div>
                        <div className="flex items-center">
                            <span className="text-gray-600 font-semibold">Status:</span>
                            <div className="ml-2">
                                <span className="inline-flex rounded-md bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-semibold">Pending</span>
                            </div>
                            <button className="ml-4 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 text-sm font-medium">Update Status</button>
                        </div>
                    </div>
                    {/* Order Items */}
                    <div className="p-4">
                        <ul>
                            <li className="flex justify-between items-center py-2 border-b">
                                <div className="flex items-center">
                                    <img src="https://via.placeholder.com/64x64" alt="Product Image" className="h-16 w-16 object-contain mr-4" />
                                    <div>
                                        <h4 className="font-semibold">Product Name</h4>
                                        <p className="text-sm text-gray-500">SKU: 12345</p>
                                    </div>
                                </div>
                                <span className="font-semibold">$29.99</span>
                            </li>
                            <li className="flex justify-between items-center py-2 border-b">
                                <div className="flex items-center">
                                    <img src="https://via.placeholder.com/64x64" alt="Product Image" className="h-16 w-16 object-contain mr-4" />
                                    <div>
                                        <h4 className="font-semibold">Product Name</h4>
                                        <p className="text-sm text-gray-500">SKU: 67890</p>
                                    </div>
                                </div>
                                <span className="font-semibold">$19.99</span>
                            </li>
                        </ul>
                    </div>
                    {/* Order Total */}
                    <div className="px-6 py-4 bg-white flex justify-between items-center">
                        <span className="font-semibold">Total:</span>
                        <span className="font-semibold">$49.98</span>
                    </div>
                </div>
            </div>
        </div>
    )
}