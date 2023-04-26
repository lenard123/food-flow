import { useState } from "react";
import useCreateOrderMutation from "../../../queries/useCreateOrderMutation";

export const PaymentModal = ({ open, setOpen, cart, setCart, total }) => {
    const { mutate, isLoading } = useCreateOrderMutation({
        onSuccess() {
            alert("Order process successfully")
            handleCancel()
            setCart([])
        }
    })
    const [amount, setAmount] = useState("");

    const handleBackSpace = () => {
        if (amount.length > 0)
            setAmount((amount) => amount.substring(0, amount.length - 1));
    };

    const handleCancel = () => {
      setAmount("")
      setOpen(false)
    }

    const handleProcess = () => {
        if (isLoading) return;

        const payment = parseFloat(amount)
        if (isNaN(payment)) {
            return alert("Invalid payment")
        }

        if (payment < total) {
            return alert("Not enough payment")
        }

        mutate(cart)
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-10 flex items-center justify-center">
            <div className="bg-white shadow w-96 p-4">
                <div>Enter Payment:</div>
                <div className="bg-slate-300 p-4 text-left text-xl">
                    ₱{amount}
                </div>

                <div className="grid grid-cols-3 gap-2 mt-2">
                    <button
                        onClick={() => setAmount((amount) => amount + "7")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        7
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "8")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        8
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "9")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        9
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "4")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        4
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "5")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        5
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "6")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        6
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "1")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        1
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "2")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        2
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "3")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        3
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + ".")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        .
                    </button>
                    <button
                        onClick={() => setAmount((amount) => amount + "0")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        0
                    </button>
                    <button
                        onClick={handleBackSpace}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        <i className="fal fa-arrow-left"></i>
                    </button>
                </div>
                <button onClick={handleProcess} className="w-full bg-primary text-white py-2 mt-4">
                    {isLoading && <i className="fal fa-spinner mr-2 fa-spin"></i>}Process Order
                </button>

                <button onClick={handleCancel} className=" text-black bg-slate-100 py-2 shadow w-full mt-2">
                    Cancel
                </button>
            </div>
        </div>
    );
};
