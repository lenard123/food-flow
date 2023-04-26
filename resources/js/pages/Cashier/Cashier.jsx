import { useState } from "react"
import { Loading } from "../../components/Loading"
import useCategoriesQuery from "../../queries/useCategoriesQuery"
import { CategoryButton } from "./components/CategoryButton"
import useProductsQuery from "../../queries/useProductsQuery"
import { ProductCard } from "./components/ProductCard"
import { EmptyProducts } from "./components/EmptyProducts"


export default function Cashier() {
    const [activeCategory, setActiveCategory] = useState(null)
    const { data: products, isLoading } = useProductsQuery(activeCategory)
    const { data: categories, isLoading: fetchingCategories } = useCategoriesQuery({
        onSuccess(data) {
            if (activeCategory === null)
                setActiveCategory(data[0]?.id)
        }
    })

    return (
        <div className="flex h-full">
            <div className="flex-grow p-8 overflow-y-auto thin-scrollbar">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-slate-800 text-2xl font-bold">Welcome, Garry</h1>
                        <div className="text-sm text-slate-500">Discover whatever you need easily</div>
                    </div>
                    <div>
                        <div className="bg-white py-2 px-3 shadow-sm w-64 focus-within:w-80 transition-all font-light focus-within:shadow-md">
                            <i className="far fa-search text-slate-500" />
                            <input className="focus:outline-none ml-2" type="search" placeholder="Search product" />
                        </div>
                    </div>
                </div>
                {fetchingCategories ? <Loading /> : (
                    <>
                        <div className="mt-6 flex gap-4">
                            {categories.map(category => <CategoryButton setCategory={setActiveCategory} active={category.id === activeCategory} key={category.id} {...category} />)}
                        </div>
                        {isLoading ? <Loading /> : (
                            <div className="mt-6 flex gap-4 flex-wrap">
                                {products.length === 0 && <EmptyProducts />}
                                {products.map(product => <ProductCard key={product.id} {...product} />)}
                            </div>
                        )}

                    </>
                )}


            </div>
            <div className="bg-white w-80 flex-shrink-0 shadow-sm p-4 py-8 flex flex-col">
                <div className="flex justify-between items-center">
                    <h1 className="text-slate-800 text-2xl font-bold">Current Order</h1>
                    <button className="bg-slate-100 p-1 px-3 shadow-sm">
                        <i className="far fa-trash text-sm text-slate-500 block" />
                    </button>
                </div>
                <div className="mt-8 flex-grow">
                    <div className="flex flex-col gap-6">

                        <div className="flex">
                            <img className="w-20 aspect-square flex-shrink-0 rounded" src="https://via.placeholder.com/300x300" />
                            <div className="flex-grow px-2 flex flex-col justify-between">
                                <div className="font-bold text-slate-700 leading-5">Smoke Tenderloin Slice Croissant</div>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold text-primary-400">₱96.00</div>
                                    <div className="flex items-center">
                                        <button className="bg-primary-400 text-white p-1 px-2">
                                            <i className="far fa-minus text-xs block" />
                                        </button>
                                        <div className="px-3">1</div>
                                        <button className="bg-primary-400 text-white p-1 px-2">
                                            <i className="far fa-plus text-xs block" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-4">
                    <div className="bg-slate-100 p-4">
                        <div className="flex justify-between text-sm">
                            <div className="text-slate-500">Subtotal</div>
                            <div className="text-slate-700 font-bold">₱345.25</div>
                        </div>
                    </div>
                    <button className="w-full bg-primary text-white py-2 mt-4">Process Order</button>
                </div>
            </div>
        </div>
    )
}