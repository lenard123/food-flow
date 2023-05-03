import { useQueryClient } from '@tanstack/react-query'
import { Echo } from '../helpers/Echo'
import { useEffect } from 'react'

export default function useOrderCreatedListener() {

    const queryClient = useQueryClient()

    useEffect(() => {
        const channel = Echo.private('orders')

        channel.listen('OrderCreated', function ({ order }) {
            queryClient.setQueryData(['orders'], (orders) => [...orders, order])
        })

        return () => {
            channel.stopListening('OrderCreated')
        }
    }, [])

}