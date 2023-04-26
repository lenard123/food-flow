import { useQuery } from "@tanstack/react-query"
import Http from "../helpers/Http"

const fetchProducts = async (category_id) => {
    const { data } = await Http.get('/api/products', {params: {category_id}})
    return data
}

export default function useProductsQuery(category_id)
{
    return useQuery(
        ['products', { category_id }],
        () => fetchProducts(category_id),
        {
            enabled: !!category_id
        }
    )
}