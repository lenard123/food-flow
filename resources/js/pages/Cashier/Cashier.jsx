import { useState } from "react";
import { Loading } from "../../components/Loading";
import useCategoriesQuery from "../../queries/useCategoriesQuery";
import { CategoryButton } from "./components/CategoryButton";
import useProductsQuery from "../../queries/useProductsQuery";
import { ProductCard } from "./components/ProductCard";
import { EmptyProducts } from "./components/EmptyProducts";
import { CartItem } from "./components/CartItem";
import { PaymentModal } from "./components/PaymentModal";



export default function Cashier() {
    const [open, setOpen] = useState(false)
    const [activeCategory, setActiveCategory] = useState(null);
    const { data: products, isLoading } = useProductsQuery(activeCategory);
    const [cart, setCart] = useState([]);
    const { data: categories, isLoading: fetchingCategories } =
        useCategoriesQuery({
            onSuccess(data) {
                if (activeCategory === null) setActiveCategory(data[0]?.id);
            },
        });

    const total = cart.reduce((acm, item) => {
        return acm + item.quantity * item.price;
    }, 0);

    const handlePayment = () => {
        if (cart.length === 0) return;
        setOpen(true)
    }

    return (
        <>
            <PaymentModal open={open} setOpen={setOpen} total={total}/>
            <div className="flex h-full">
                <div className="flex-grow p-8 overflow-y-auto thin-scrollbar">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-slate-800 text-2xl font-bold">
                                Welcome, Garry
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
                    {fetchingCategories ? (
                        <Loading />
                    ) : (
                        <>
                            <div className="mt-6 flex gap-4">
                                {categories.map((category) => (
                                    <CategoryButton
                                        setCategory={setActiveCategory}
                                        active={category.id === activeCategory}
                                        key={category.id}
                                        {...category}
                                    />
                                ))}
                            </div>
                            {isLoading ? (
                                <Loading />
                            ) : (
                                <div className="mt-6 flex gap-4 flex-wrap">
                                    {products.length === 0 && <EmptyProducts />}
                                    {products.map((product) => (
                                        <ProductCard
                                            cart={cart}
                                            setCart={setCart}
                                            key={product.id}
                                            {...product}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
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
                                <div className="text-slate-500">Subtotal</div>
                                <div className="text-slate-700 font-bold">
                                    ₱{total}
                                </div>
                            </div>
                        </div>
                        <button onClick={handlePayment} className="w-full bg-primary text-white py-2 mt-4">
                            Proceed to payment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
