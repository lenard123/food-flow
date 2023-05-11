export const CartItem = ({ item, cart, setCart }) => {
    if (item.quantity === 0) return null;


    const setQuantity = (quantity) => {
        setCart((cart) => {
            //remove if quantity is zero
            if (quantity <= 0)
                return cart.filter(cartItem => cartItem.id !== item.id)

            return cart.map((cartItem) => {
                if (cartItem.id !== item.id) return cartItem;
                return {
                    ...cartItem,
                    quantity,
                };
            });
        });
    }

    const handleMinus = () => {
        setQuantity(Math.max(0, item.quantity - 1))
        setCart(cart => cart.filter((item) => item.quantity > 0))
    };

    const handlePlus = () => {
        setQuantity(Math.max(0, item.quantity + 1))
    };

    return (
        <div className="flex">
            <img
                className="w-20 aspect-square flex-shrink-0 rounded"
                src={`/storage/${item.image}`}
            />
            <div className="flex-grow px-2 flex flex-col justify-between">
                <div className="font-bold text-slate-700 leading-5">
                    {item.name}
                </div>
                <div className="flex justify-between items-center">
                    <div className="font-bold text-primary-400">
                        ₱{item.price}
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={handleMinus}
                            className="bg-primary-400 text-white p-1 px-2"
                        >
                            <i className="far fa-minus text-xs block" />
                        </button>
                        <input
                            type="number"
                            step={1}
                            value={item.quantity}
                            className="px-3 focus:outline-none text-center"
                            size={1}
                            onChange={e => setQuantity(e.target.value)}
                        />
                        <button
                            onClick={handlePlus}
                            className="bg-primary-400 text-white p-1 px-2"
                        >
                            <i className="far fa-plus text-xs block" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
