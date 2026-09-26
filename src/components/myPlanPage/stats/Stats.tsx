'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import { useContext } from "react";


export default function Stats() {

    const { myPlans, savedPlans, toggle } = useContext(FitContext) as FitContextType;

    const totalDuration = (toggle ? myPlans : savedPlans).map(plan => plan.duration).reduce((total, duration) => total + duration, 0);
    const totalCalories = (toggle ? myPlans : savedPlans).map(plan => plan.caloriesBurned).reduce((total, caloriesBurned) => total + caloriesBurned, 0);


    return (
        <>
            <div className="px-6 pt-8 pb-6 bg-[#13161D] border border-[#232723] rounded-2xl flex items-center justify-between">

                <div className="space-y-1.5 w-full">
                    <p className="text-dim text-xs">Exercises</p>
                    <h1 className="text-4xl font-heading font-bold text-brand">{toggle ? myPlans.length : savedPlans.length}</h1>
                </div>



                <div className="space-y-1.5 w-full px-8 border-x border-[#232732]">
                    <p className="text-dim text-xs">Minutes</p>
                    <h1 className="text-4xl font-heading font-bold">{totalDuration}</h1>
                </div>




                <div className="space-y-1.5 w-full pl-8">
                    <p className="text-dim text-xs">Calories</p>
                    <h1 className="text-4xl font-heading font-bold">{totalCalories}</h1>
                </div>

            </div>
        </>
    )
}