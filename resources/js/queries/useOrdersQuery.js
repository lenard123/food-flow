import { useQuery } from "@tanstack/react-query"
import Http from "../helpers/Http"


const fetchOrders = async () => {
  const { data } = await Http.get('/api/orders')
  return data
}

export default function useOrdersQuery() {
  return useQuery(['orders'], fetchOrders)
}