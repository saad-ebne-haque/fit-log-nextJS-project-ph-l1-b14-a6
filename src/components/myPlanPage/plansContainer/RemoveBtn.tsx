'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import FitDataType from "@/types/FitDataType.type";
import { X } from "lucide-react";
import { useContext } from "react";


export interface RemoveBtnProps {
    plan: FitDataType;
    removeFrom: 'myPlans' | 'savedPlans';
    clsName: string;
}

export default function RemoveBtn({ plan, removeFrom ,clsName}: RemoveBtnProps) {
    const { handleRemove } = useContext(FitContext) as FitContextType;

    return (
        <>
            <button
                onClick={() => handleRemove(plan, removeFrom)}
                className={`btn btn-circle btn-ghost text-[#6B7280] ${clsName}`}><X className="w-4"
                ></X>
            </button>
        </>
    )
}