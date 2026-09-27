export default function Loading() {
    return (
        <div className="min-h-[60vh] w-full flex flex-col items-center justify-center space-y-4">

            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-brand animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-brand animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 rounded-full bg-brand animate-bounce"></div>
            </div>

            <p className="text-dim text-sm font-medium tracking-wide animate-pulse">
                Loading Library Plans...
            </p>
        </div>
    );
}