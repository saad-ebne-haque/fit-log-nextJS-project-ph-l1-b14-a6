'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import FitDataType from "@/types/FitDataType.type";
import { Bookmark, CalendarPlus2 } from "lucide-react";
import { useContext } from "react";

export interface BookDetailsPageBtnsProps {
    plan: FitDataType;
}

export default function BookDetailsPageBtns({ plan }: BookDetailsPageBtnsProps) {
    const { handleMyPlans, handleSavedPlans } = useContext(FitContext) as FitContextType;
    return (
        <>
            <div className="gap-4 flex flex-col lg:flex-row">
                <button
                    onClick={() => handleMyPlans(plan)}
                    className="btn py-3 px-6 bg-brand text-sm text-background rounded-xl space-x-2 w-full lg:w-fit">
                    <CalendarPlus2 />
                    <span> Add to {"today's"} plan</span>
                </button>

                <button
                onClick={()=>handleSavedPlans(plan)}
                    className="btn py-3 px-6 btn-outline border-[#374151] text-sm text-[#E5E7EB] rounded-xl space-x-2 w-full lg:w-fit">
                    <Bookmark />
                    <span> Save for later</span>
                </button>
            </div>

        </>
    )
}