import { Bookmark, CalendarPlus2 } from "lucide-react";



const BookDetailsPageBtns = () => {



    return (
        <>
            <div className="space-x-4">
                <button
                    className="btn py-3 px-6 bg-brand text-sm text-background rounded-xl space-x-2">
                    <CalendarPlus2 />
                    <span> Add to {"today's"} plan</span>
                </button>
                <button
                    className="btn py-3 px-6 btn-outline border-[#374151] text-sm text-[#E5E7EB] rounded-xl space-x-2">
                    <Bookmark />
                    <span> Save for later</span>
                </button>
            </div>

        </>
    );
};

export default BookDetailsPageBtns;