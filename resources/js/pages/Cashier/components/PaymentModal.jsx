import { useState } from "react";
import useCreateOrderMutation from "../../../queries/useCreateOrderMutation";

export const PaymentModal = ({ open, setOpen, cart, setCart, total, setPaidAmount }) => {
    const { mutate, isLoading } = useCreateOrderMutation({
        onSuccess() {
            alert("Order process successfully");
            handleCancel();
            setCart([]);
        },
    });
    const [amount, setAmount] = useState("");

    const handleBackSpace = () => {
        if (amount.length > 0)
            setAmount((amount) => amount.substring(0, amount.length - 1));
    };

    const calculate = (number) => {
        setAmount(amount => {

            if (number == ".") {
                if (amount.includes("."))
                    return amount;
                if (amount == "")
                    return "0.";
            }

            if (amount == "0") {
                return number
            }

            return amount + number
        })
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleProcess = () => {

        const payment = parseFloat(amount);
        if (isNaN(payment)) {
            return alert("Invalid amount");
        }

        setAmount("")
        setPaidAmount(payment)
        setOpen(false)
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-10 flex items-center justify-center">
            <div className="bg-white shadow w-96 p-4">
                <div>Enter Payment:</div>
                <div className="bg-slate-300 p-4 flex justify-between text-xl">
                    <span>₱</span>
                    <input type="number" onChange={e => setAmount(e.target.value)} value={amount} className="flex-grow bg-transparent outline-none text-right"/>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-2">
                    <button
                        onClick={() => calculate("7")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        7
                    </button>
                    <button
                        onClick={() => calculate("8")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        8
                    </button>
                    <button
                        onClick={() => calculate("9")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        9
                    </button>
                    <button
                        onClick={() => calculate("4")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        4
                    </button>
                    <button
                        onClick={() => calculate("5")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        5
                    </button>
                    <button
                        onClick={() => calculate("6")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        6
                    </button>
                    <button
                        onClick={() => calculate("1")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        1
                    </button>
                    <button
                        onClick={() => calculate("2")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        2
                    </button>
                    <button
                        onClick={() => calculate("3")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        3
                    </button>
                    <button
                        onClick={() => calculate(".")}
                        className="text-xl text-black bg-slate-100 py-4 shadow"
                    >
                        .
                    </button>
                    <button
                        onClick={() => calculate("0")}
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
                <button
                    onClick={handleProcess}
                    className="w-full bg-primary text-white py-2 mt-4"
                >
                    Confirm
                </button>

                <button
                    onClick={handleCancel}
                    className=" text-black bg-slate-100 py-2 shadow w-full mt-2"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
