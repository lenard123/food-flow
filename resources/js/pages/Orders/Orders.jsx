import { useState } from "react";
import { Loading } from "../../components/Loading";
import useOrderCreatedListener from "../../listeners/useOrderCreatedListener";
import useOrderStatusUpdatedListener from "../../listeners/useOrderStatusUpdatedListener";
import useOrdersQuery from "../../queries/useOrdersQuery";
import EmptyOrdersPage from "./components/EmptyOrdersPage";
import { OrderItem } from "./components/OrderItem";

export default function Orders() {
    const [status, setStatus] = useState('pending')
    const { data: orders, isLoading } = useOrdersQuery();
    const pendingOrders = orders?.filter(({status}) => ['preparing', 'pending'].includes(status))
    const completedOrders = orders?.filter(({status}) => ['completed'].includes(status))

    useOrderCreatedListener()
    useOrderStatusUpdatedListener()

    return (
        <div className="p-8 overflow-y-auto thin-scrollbar">
            <h1 className="text-slate-800 text-2xl font-bold">Manage Orders</h1>
            <div className="text-sm text-slate-500">
                Efficiently Manage Your Sales Orders
            </div>
            <div className="mt-6 flex gap-4">
                <button
                    onClick={() => setStatus('pending')} 
                    className={`
                        ${status === 'pending' ? 'bg-primary text-white' : 'bg-white text-slate-700'} 
                        py-3 px-6 font-bold text-sm shadow-md`}>
                    Pending Orders
                </button>
                <button 
                    onClick={() => setStatus('completed')}
                    className={`
                        ${status === 'completed' ? 'bg-primary text-white' : 'bg-white text-slate-700'} 
                        py-3 px-6 font-bold text-sm shadow-md`}>
                    Completed
                </button>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                status === 'pending' ? (
                    pendingOrders.length === 0 ? (
                        <EmptyOrdersPage 
                            text="There is no pending orders yet."
                            description="Once you place an order, it will appear here."
                        />
                    ) : (
                        <div className="mt-6 flex flex-col gap-4">
                            {pendingOrders.map((order) => (
                                <OrderItem key={order.id} {...order} />
                            ))}
                        </div>
                    )
                ) : (
                    completedOrders.length === 0 ? (
                        <EmptyOrdersPage 
                            text="There is no pending orders yet."
                            description="Once you place an order, it will appear here."
                        />
                    ) : (
                        <div className="mt-6 flex flex-col gap-4">
                            {completedOrders.map((order) => (
                                <OrderItem key={order.id} {...order} />
                            ))}
                        </div>
                    )
                )

            )
            }
        </div >
    );
}
