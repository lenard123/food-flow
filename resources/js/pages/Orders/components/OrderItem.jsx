import moment from "moment";
import { OrderItemProduct } from "./OrderItemProduct";
import useUpdateOrderMutation from "../../../queries/useUpdateOrderMutation";

export const OrderItem = ({ today_id, created_at, items, status, id }) => {
    const { mutate, isLoading } = useUpdateOrderMutation(id);

    const handlePrepareOrder = () => {
        if (isLoading) return;
        mutate("preparing");
    };

    const handleCompleteOrder = () => {
        if (isLoading) return;
        mutate("completed");
    };

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
                <div className="flex items-center">
                    <span className="text-gray-600 font-semibold">Status:</span>
                    <div className="ml-2">
                        {status === "pending" && (
                            <span className="inline-flex rounded-md px-2 py-1 text-xs font-semibold bg-slate-200 text-slate-800">
                                Pending
                            </span>
                        )}

                        {status === "preparing" && (
                            <span className="inline-flex rounded-md px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800">
                                Preparing
                            </span>
                        )}

                        {status === "completed" && (
                            <span className="inline-flex rounded-md px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                                Completed
                            </span>
                        )}
                    </div>
                </div>
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
                <div className="flex gap-2">
                    <span className="font-semibold">Total:</span>
                    <span className="font-semibold">₱{total}</span>
                </div>
                <div className="flex gap-2">
                    {status !== "completed" && (
                        <button className="bg-gray-500 text-white hover:bg-gray-600 rounded-md px-3 py-2 text-sm font-medium">
                            Cancel Order
                        </button>
                    )}

                    {status === "pending" && (
                        <button
                            onClick={handlePrepareOrder}
                            className="inline-flex gap-2 items-center bg-primary text-white hover:bg-primary-600 rounded-md px-3 py-2 text-sm font-medium"
                        >
                            {isLoading && (
                                <i className="fa fa-spinner fa-spin"></i>
                            )}{" "}
                            Prepare Order
                        </button>
                    )}
                    {status === "preparing" && (
                        <button
                            onClick={handleCompleteOrder}
                            className="inline-flex gap-2 items-center bg-green-500 text-white hover:bg-green-600 rounded-md px-3 py-2 text-sm font-medium"
                        >
                            {isLoading && (
                                <i className="fa fa-spinner fa-spin"></i>
                            )}{" "}
                            Complete Order
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
