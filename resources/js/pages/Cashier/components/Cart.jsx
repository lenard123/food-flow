import { useState } from "react";
import { CartItem } from "./CartItem";
import { PaymentModal } from "./PaymentModal";

export default function Cart({ cart, setCart, total, setCheckout, checkout }) {
    const totalQuantity = cart.reduce((acm, item) => {
        return acm + item.quantity;
    }, 0);

    const handlePayment = () => {
        if (cart.length === 0) return;
        setCheckout(true);
    };

    
    return (
        <div className="bg-white w-80 flex-shrink-0 shadow-sm p-4 py-8 flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-slate-800 text-2xl font-bold">
                    Current Order
                </h1>
                <button className="bg-slate-100 p-1 px-3 shadow-sm">
                    <i className="far fa-trash text-sm text-slate-500 block" />
                </button>
            </div>
            <div className="mt-8 flex-grow">
                <div className="flex flex-col gap-6">
                    {cart.map((item) => (
                        <CartItem
                            cart={cart}
                            setCart={setCart}
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-4">
                <div className="bg-slate-100 p-4">
                    <div className="flex justify-between text-sm">
                        <div className="text-slate-500">Total Quantity</div>
                        <div className="text-slate-700 font-bold">
                            {totalQuantity}
                        </div>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <div className="text-slate-500">Total Amount</div>
                        <div className="text-slate-700 font-bold">₱{total}</div>
                    </div>
                </div>
                {checkout ? (
                    <button
                    onClick={() => setCheckout(false)}
                    className="w-full bg-slate-700 text-white py-2 mt-4"
                >
                    Cancel Checkout
                </button>                    
                ) : (
                    <button
                        onClick={handlePayment}
                        className="w-full bg-primary text-white py-2 mt-4"
                    >
                        Checkout
                    </button>
                )}
            </div>
        </div>
    );
}
