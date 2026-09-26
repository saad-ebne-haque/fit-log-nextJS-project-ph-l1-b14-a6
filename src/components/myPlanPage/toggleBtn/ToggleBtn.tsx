'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import { useContext } from "react";

// export interface ToggleBtnProps {
//     prop: string
// }

export default function ToggleBtn() {
    const { toggle: isOpen, setToggle } = useContext(FitContext) as FitContextType;
    // const isOpen: boolean = false;
    return (

        <>
            <div className="p-1 rounded-xl flex items-center gap-1 bg-[#151921] border border-[#232723]">
                <button
                    onClick={() => setToggle(true)}
                    className={`btn rounded-lg  text-xs ${isOpen ? 'bg-[#1f242d] border border-[#2b303d] font-bold' : 'btn-ghost text-dim font-normal'}`}
                >
                    Today’s Plan
                </button>
                <button
                    onClick={() => setToggle(false)}
                    className={`btn rounded-lg  text-xs ${!isOpen ? 'bg-[#1f242d] border border-[#2b303d] font-bold' : 'btn-ghost text-dim font-normal'}`}>
                    Saved
                </button>
            </div>
        </>

    )
}