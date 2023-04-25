import Cashier from "./pages/Cashier/Cashier";
import Orders from "./pages/Orders/Orders";

export default function Router({ page })
{
    if (page === 'cashier')
        return <Cashier />
    if (page === 'orders')
        return <Orders />

    return "Page not found"
}