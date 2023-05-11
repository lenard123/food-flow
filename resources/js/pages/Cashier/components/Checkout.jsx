import { useState } from "react";
import useCreateOrderMutation from "../../../queries/useCreateOrderMutation";
import { PaymentModal } from "./PaymentModal";

function Receipt({ cart, total, id, date, payment, change, setCheckout, setCart }) {
    date = new Date(date)

    const handlePrint = () => {
      setCheckout(false)
      setCart([])
    }

    return (
        <div className="inset-0 fixed bg-black/20 flex items-center justify-center">
            <div className="bg-white p-2 shadow text-slate-700 w-[360px] py-2">
                <h1 className="text-center text-2xl font-bold">
                    Food Flow POS
                </h1>
                <div className="text-center text-sm">[Address of Store]</div>
                <div className="mt-4">
                    <div className="flex justify-between text-xs text-slate-500 border-b pb-1">
                        <div>Order Number: #{id}</div>
                        <div>{date.toLocaleDateString()} {date.toLocaleTimeString()}</div>
                    </div>
                    <table className="w-full text-sm">
                        <thead>
                            <tr>
                                <th className="text-left">#</th>
                                <th className="text-left">Name</th>
                                <th>Qty</th>
                                <th className="text-right">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, i) => (
                                <tr key={item.id}>
                                    <td className="text-left">{i + 1}</td>
                                    <td>{item.name}</td>
                                    <td className="text-center">
                                        {item.quantity}
                                    </td>
                                    <td className="text-right">
                                        ₱{item.quantity * item.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-2 border-t pt-2">
                        <div className=" flex justify-between">
                            <div>Total</div>
                            <div>₱{total}</div>
                        </div>
                        <div className=" flex justify-between">
                            <div>Payment</div>
                            <div>₱{payment}</div>
                        </div>
                        <div className=" flex justify-between">
                            <div>Change</div>
                            <div>₱{change}</div>
                        </div>
                        <div className=" flex justify-between">
                            <div>Cashier</div>
                            <div>{window.currentUser.fullname}</div>
                        </div>
                    </div>
                    <div className="mt-4 text-center text-xs">
                        Thank you for coming
                    </div>
                    <div className="mt-6">
                        <button onClick={handlePrint} className="w-full bg-primary text-white py-2 rounded-full">
                            Print
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Checkout({ setCheckout, cart, setCart, total }) {
    const { mutate, isLoading, isSuccess, data } = useCreateOrderMutation({
        onSuccess(data) {
            // alert("Order process successfully");
            // // handleCancel();
            // setCart([]);
            console.log(data);
        },
    });
    const [paidAmount, setPaidAmount] = useState(0);
    const change = paidAmount - total;
    const [openPayment, setOpenPayment] = useState(false);

    const handleProcess = () => {
        if (cart.length == 0) return;
        if (change < 0) return alert("Not enought payment");
        mutate(cart);
    };

    return (
        <div className="mt-6 bg-white p-4 shadow w-[600px] mx-auto">
            {isSuccess && (
                <Receipt
                    setCheckout={setCheckout}
                    setCart={setCart}
                    id={data.id}
                    date={data.created_at}
                    cart={cart}
                    total={total}
                    payment={paidAmount}
                    change={change}
                />
            )}
            <PaymentModal
                cart={cart}
                setCart={setCart}
                open={openPayment}
                setOpen={setOpenPayment}
                total={total}
                setPaidAmount={setPaidAmount}
            />
            <h1 className="text-2xl font-bold text-slate-800 border-b pb-4">
                Checkout
            </h1>
            <div className="mt-4 text-slate-700 border-b pb-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-xl w-2/5">Amount:</div>
                    <div className="flex-grow">
                        <div className="bg-slate-100 border text-center text-lg py-2 rounded-full">
                            ₱{total}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="text-xl w-2/5">Customer Paid:</div>
                    <div className="flex-grow">
                        <button
                            onClick={() => setOpenPayment(true)}
                            className="bg-slate-700 text-white w-full border text-center text-lg py-2 rounded-full"
                        >
                            Insert Paid Amount
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="text-xl w-2/5">Amount Customer Paid:</div>
                    <div className="flex-grow">
                        <div className="bg-slate-100 border text-center text-lg py-2 rounded-full">
                            <span>₱{paidAmount}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="text-xl w-2/5">Change:</div>
                    <div className="flex-grow">
                        <div className="bg-slate-100 border text-center text-lg py-2 rounded-full">
                            {change >= 0 ? (
                                <span>₱{change}</span>
                            ) : (
                                <i className="text-sm">Not enough payment</i>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="w-full bg-primary text-white py-2 mt-4"
                onClick={handleProcess}
            >
                {isLoading && <i className="fal fa-spinner mr-2 fa-spin"></i>}
                Proccess Order
            </button>
        </div>
    );
    // return (
    //     <div className="flex h-full">
    //         <div className="flex-grow">checkout</div>
    //         <Cart
    //             cart={cart}
    //             total={total}
    //             setCart={setCart}
    //             setCheckout={setCheckout}
    //         />
    //     </div>
    // );
}
