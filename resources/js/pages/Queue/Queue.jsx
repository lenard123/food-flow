import moment from "moment";
import useOrderCreatedListener from "../../listeners/useOrderCreatedListener";
import useOrderStatusUpdatedListener from "../../listeners/useOrderStatusUpdatedListener";
import useOrdersQuery from "../../queries/useOrdersQuery";

window.moment = moment;

export default function Queue() {
    const { data: orders, isLoading } = useOrdersQuery();
    useOrderCreatedListener();
    useOrderStatusUpdatedListener();
    const pendingOrders = orders?.filter(({ status }) =>
        ["preparing", "pending"].includes(status)
    );
    const completedOrders = orders
        ?.filter(({ status }) => ["completed"].includes(status))
        .filter(({ updated_at }) => {
            var date = new Date();

            var FIVE_MIN = 5 * 60 * 1000;

            if (date - new Date(updated_at) < FIVE_MIN) {
              return true
            }

            return false
        })

    return (
        <div className="grid grid-cols-3 divide-x h-screen">
            <div className="p-1">
                <div className="bg-blue-700 text-white text-5xl font-bold p-4">
                    Preparing
                </div>
                <div className="grid grid-cols-3 p-2 gap-x-10 gap-y-3">
                    {pendingOrders?.map((order) => (
                        <div key={order.id} className="text-4xl font-bold">
                            #{order.today_id.toString().padStart(3, "0")}
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-1">
                <div className="bg-green-700 text-white text-5xl font-bold p-4">
                    Please Collect
                </div>
                <div className="grid grid-cols-3 p-2 gap-x-10 gap-y-3">
                    {completedOrders?.map((order) => (
                        <div key={order.id} className="text-4xl font-bold">
                            #{order.today_id.toString().padStart(3, "0")}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
