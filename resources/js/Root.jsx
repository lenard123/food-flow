import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Router from "./Router";

const queryClient = new QueryClient()

export default function Root({ page })
{
    return (
        <QueryClientProvider client={queryClient}>
            <Router page={page} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}