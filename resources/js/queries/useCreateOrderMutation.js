import { useMutation } from "@tanstack/react-query"
import Http from "../helpers/Http"


const createOrder = async (cart) => {
  console.log(cart)
  const { data } = await Http.post('/api/orders', {
    items: cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity
    }))
  })
  return data
}

export default function useCreateOrderMutation(option)
{
  return useMutation(createOrder, option)
}