'use client';
import { FitContext, FitContextType } from "@/contexts/FitContext";
import { CheckCheckIcon, CheckIcon } from "lucide-react";
import { useContext, useState } from "react";






export interface MarkAsDoneBtnProps {
    name: string
}

export default function MarkAsDoneBtn({ name }: MarkAsDoneBtnProps) {
    const { handleIsDone } = useContext(FitContext) as FitContextType;
    const [isDone, setIsDone] = useState<boolean>(false)
    return (
        <>
            <div
                onClick={() => handleIsDone(name, isDone, setIsDone)}  >

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