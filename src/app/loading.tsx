export default function Loading() {
    return (
        <div className="min-h-screen bg-[#13161D] flex flex-col items-center justify-center px-4">
            <div className="bg-[#151922] border border-[#232834] p-8 rounded-3xl shadow-2xl flex flex-col items-center space-y-4 max-w-sm w-full">
                
                {/* DaisyUI Loading Spinner */}
                <span className="loading loading-spinner loading-lg text-brand"></span>
                
                {/* Loading Text */}
                <div className="text-center space-y-1">
                    <h2 className="text-lg font-heading font-bold tracking-wide">Loading...</h2>
                    <p className="text-dim text-xs">Please wait while we fetch your fitness plans.</p>
                </div>

            </div>
        </div>
    );
}