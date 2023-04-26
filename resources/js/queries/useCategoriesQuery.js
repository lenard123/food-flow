import { useQuery } from "@tanstack/react-query"
import Http from "../helpers/Http"

const fetchCategories = async () => {
    const { data } = await Http.get('/api/categories')
    return data
}

export default function useCategoriesQuery(option)
{
    return useQuery(['categories'], fetchCategories, option)
}