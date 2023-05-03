import moment from "moment";
import { OrderItemProduct } from "./OrderItemProduct";

export const OrderItemStatus = () => {
    return (
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
    );
};

export const OrderItem = ({ today_id, created_at, items }) => {
    const total = items.reduce((acm, item) => {
        return acm + item.pivot.quantity * item.pivot.price;
    }, 0);

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
                <OrderItemStatus />
            </div>
            {/* Order Items */}
            <div className="p-4">
                <ul>
                    {items.map((item) => (
                        <OrderItemProduct key={item.id} item={item} />
                    ))}
                </ul>
            </div>
            {/* Order Total */}
            <div className="px-6 py-4 bg-white flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">₱{total}</span>
            </div>
        </div>
    );
};
