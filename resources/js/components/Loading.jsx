
export const Loading = () => {
    return (
        <div className="flex items-center justify-center py-32">
            <div className="flex items-center space-x-4 text-gray-600">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v-4c2.485 0 4.746-.895 6.5-2.376L20 12zm-4-6.709V4.062a7.963 7.963 0 00-3 0v1.529a6.001 6.001 0 013 0z" />
                </svg>
                <span>Loading...</span>
            </div>
        </div>

    )
}