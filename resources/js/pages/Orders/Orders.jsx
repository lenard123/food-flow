import { Loading } from "../../components/Loading";
import useOrdersQuery from "../../queries/useOrdersQuery";
import EmptyOrdersPage from "./components/EmptyOrdersPage";
import { OrderItem } from "./components/OrderItem";

export default function Orders() {
    const { data: orders, isLoading } = useOrdersQuery();
    const pendingOrders = orders?.filter(({status}) => ['preparing', 'pending'].includes(status))

    return (
        <div className="p-8 overflow-y-auto thin-scrollbar">
            <h1 className="text-slate-800 text-2xl font-bold">Manage Orders</h1>
            <div className="text-sm text-slate-500">
                Efficiently Manage Your Sales Orders
            </div>
            <div className="mt-6 flex gap-4">
                <button className="bg-primary text-white py-3 px-6 font-bold text-sm shadow-md">
                    Pending Orders
                </button>
                <button className="bg-white py-3 px-6 font-bold text-sm shadow-md text-slate-700">
                    Completed
                </button>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                pendingOrders.length === 0 ? (
                    <EmptyOrdersPage />
                ) : (
                    <div className="mt-6 flex flex-col gap-4">
                        {pendingOrders.map((order) => (
                            <OrderItem key={order.id} {...order} />
                        ))}
                    </div>
                )
            )
            }
        </div >
    );
}
