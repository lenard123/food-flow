import Cashier from "./pages/Cashier/Cashier";
import Orders from "./pages/Orders/Orders";
import Http from "./helpers/Http";
import { useEffect } from "react";

export default function Router({ page })
{

    useEffect(() => {
        Http.get('/sanctum/csrf-cookie')
    }, [])

    if (page === 'cashier')
        return <Cashier />
    if (page === 'orders')
        return <Orders />

    return "Page not found"
}