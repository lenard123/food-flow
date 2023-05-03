import { useMutation, useQueryClient } from "@tanstack/react-query";
import Http from "../helpers/Http"

const updateOrder = async (id, status) => {
    const { data } = await Http.patch(`/api/orders/${id}`, { status });
    return data
}

export default function useUpdateOrderMutation (id, option = {}) {

    const queryClient = useQueryClient()

    return useMutation((status) => updateOrder(id, status), {
        ...option,
        onSuccess(data) {
            queryClient.setQueryData(['orders'], (orders) => {
                return orders.map(order => {
                    if (order.id === data.id) return data
                    return order
                })
            })
        }
    })
}