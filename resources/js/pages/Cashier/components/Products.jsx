import { useState } from "react";
import { Loading } from "../../../components/Loading";
import useCategoriesQuery from "../../../queries/useCategoriesQuery";
import useProductsQuery from "../../../queries/useProductsQuery";
import { CategoryButton } from "./CategoryButton";
import { EmptyProducts } from "./EmptyProducts";
import { ProductCard } from "./ProductCard";

export default function Products({ cart, setCart }) {
  const { data: categories, isLoading: fetchingCategories } =
  useCategoriesQuery({
      onSuccess(data) {
          if (activeCategory === null) setActiveCategory(data[0]?.id);
      },
  });
  const [activeCategory, setActiveCategory] = useState(null);
  const { data: products, isLoading } = useProductsQuery(activeCategory);


  if (fetchingCategories) return <Loading />;

    return (
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
    );
}
