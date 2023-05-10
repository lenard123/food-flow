import { useQueryClient } from '@tanstack/react-query'
import { Echo } from '../helpers/Echo'
import { useEffect } from 'react'

export default function useOrderCompletedListener() {

    const queryClient = useQueryClient()

    useEffect(() => {
        const channel = Echo.private('dashboard')

        channel.listen('OrderCompleted', function ({ order }) {
            queryClient.invalidateQueries(['dashboard'])
        })

        return () => {
            channel.stopListening('OrderCompleted')
        }
    }, [])

}