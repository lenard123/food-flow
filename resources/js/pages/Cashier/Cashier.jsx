import { useState } from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { PaymentModal } from "./components/PaymentModal";
import Products from "./components/Products";

export default function Cashier() {
    const [open, setOpen] = useState(false);
    const [checkout, setCheckout] = useState(false);
    const [cart, setCart] = useState([]);

    const total = cart.reduce((acm, item) => {
        return acm + item.quantity * item.price;
    }, 0);

    return (
        <>
            <PaymentModal
                cart={cart}
                setCart={setCart}
                open={open}
                setOpen={setOpen}
                total={total}
            />
            <div className="flex h-full">
                <div className="flex-grow p-8 overflow-y-auto thin-scrollbar">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-slate-800 text-2xl font-bold">
                                Welcome, {window.currentUser.firstname}
                            </h1>
                            <div className="text-sm text-slate-500">
                                Discover whatever you need easily
                            </div>
                        </div>
                        <div>
                            <div className="bg-white py-2 px-3 shadow-sm w-64 focus-within:w-80 transition-all font-light focus-within:shadow-md">
                                <i className="far fa-search text-slate-500" />
                                <input
                                    className="focus:outline-none ml-2"
                                    type="search"
                                    placeholder="Search product"
                                />
                            </div>
                        </div>
                    </div>
                    {checkout ? (
                        <Checkout
                            cart={cart}
                            setCart={setCart}
                            total={total}
                            setCheckout={setCheckout}
                        />
                    ) : (
                        <Products cart={cart} setCart={setCart} />
                    )}
                </div>
                <Cart
                    checkout={checkout}
                    cart={cart}
                    setCart={setCart}
                    total={total}
                    setCheckout={setCheckout}
                />
            </div>
        </>
    );
}
