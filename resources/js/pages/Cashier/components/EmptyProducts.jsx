
export const EmptyProducts = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full py-36">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 text-center">Try adding a new product to see it listed here.</p>
        </div>
    )
}