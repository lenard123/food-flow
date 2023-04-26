import moment from "moment";

export const OrderItem = ({ today_id, created_at, items }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Order Header */}
            <div className="px-6 py-4 bg-white flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-semibold">Order #{today_id}</h3>
                    <p className="text-sm text-gray-500">
                      {moment(created_at).fromNow()}
                    </p>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-600 font-semibold">Status:</span>
                    <div className="ml-2">
                        <span className="inline-flex rounded-md bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-semibold">
                            Pending
                        </span>
                    </div>
                    <button className="ml-4 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 text-sm font-medium">
                        Update Status
                    </button>
                </div>
            </div>
            {/* Order Items */}
            <div className="p-4">
                <ul>
                    <li className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/64x64"
                                alt="Product Image"
                                className="h-16 w-16 object-contain mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Product Name</h4>
                                <p className="text-sm text-gray-500">
                                    SKU: 12345
                                </p>
                            </div>
                        </div>
                        <span className="font-semibold">$29.99</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/64x64"
                                alt="Product Image"
                                className="h-16 w-16 object-contain mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Product Name</h4>
                                <p className="text-sm text-gray-500">
                                    SKU: 67890
                                </p>
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
    );
};
