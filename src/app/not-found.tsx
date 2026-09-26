import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-[80vh] flex items-center justify-center px-4 py-16">
            <div className="bg-[#151922] border border-[#232834] p-8 md:p-10 rounded-3xl max-w-lg w-full shadow-2xl flex flex-col items-center text-center space-y-6">
                
                {/* Icon Wrapper */}
                <div className="w-20 h-20 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shadow-inner">
                    <AlertCircle className="w-10 h-10" />
                </div>

                {/* Heading & Description */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-heading font-extrabold tracking-wide">
                        404 <span className="text-brand">NOT FOUND</span>
                    </h1>
                    <p className="text-dim text-sm md:text-base leading-relaxed">
                        Oops! The page or fitness plan you are looking for doesn’t exist or has been moved.
                    </p>
                </div>

                {/* Action Button */}
                <div className="w-full pt-2">
                    <Link 
                        href="/" 
                        className="btn bg-brand text-black hover:bg-brand/80 rounded-full w-full flex items-center justify-center gap-2 font-semibold transition-all duration-300">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}