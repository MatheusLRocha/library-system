function LoadingSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="h-4 w-48 rounded bg-gray-300" />
            <div className="mt-2 h-4 w-32 rounded bg-gray-300" />
        </div>
    )
}

export default function Loading() {
    return <LoadingSkeleton />
}