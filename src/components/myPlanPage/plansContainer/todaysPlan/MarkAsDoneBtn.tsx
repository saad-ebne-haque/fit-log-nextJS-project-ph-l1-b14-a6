'use client';
import { FitContext, FitContextType } from "@/contexts/FitContext";
import FitDataType from "@/types/FitDataType.type";
import { CheckCheckIcon, CheckIcon } from "lucide-react";
import { useContext, } from "react";






export interface MarkAsDoneBtnProps {
    plan: FitDataType;
}

export default function MarkAsDoneBtn({ plan }: MarkAsDoneBtnProps) {
    const { handleMarkAsDone, alreadyDone } = useContext(FitContext) as FitContextType;
    const isDone: boolean = alreadyDone.some(data => data.id === plan.id)
    return (
        <>
            <div
                onClick={() => handleMarkAsDone(plan)}  >

                <button
                    disabled={isDone}
                    className={`flex items-center gap-1.5 font-semibold text-xs btn  rounded-full  w-40 ${isDone ? 'bg-[#a3ca05] text-[#2e2d2d]' : 'text-black bg-brand'}`}>
                    {isDone ?
                        <>
                            <CheckCheckIcon className="w-3.5"></CheckCheckIcon> Already Marked
                        </>
                        :
                        <>
                            <CheckIcon className="w-3.5 "></CheckIcon>
                            Mark as Done
                        </>
                    }
                </button>

            </div>
        </>
    );
}