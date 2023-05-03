import { useQueryClient } from '@tanstack/react-query'
import { Echo } from '../helpers/Echo'
import { useEffect } from 'react'

export default function useOrderStatusUpdatedListener() {

    const queryClient = useQueryClient()

    useEffect(() => {
        const channel = Echo.private('orders')

        channel.listen('OrderStatusUpdated', function ({ order_id, status }) {
            queryClient.setQueryData(['orders'], (orders) => orders.map(order=> {
                if (order.id === order_id) return {...order, status}
                return order
            }))
        })

        return () => {
            channel.stopListening('OrderStatusUpdated')
        }
    }, [])

}