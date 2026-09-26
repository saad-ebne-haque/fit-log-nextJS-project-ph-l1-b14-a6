'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import { useContext } from "react";


export default function Stats() {

    const { myPlans, savedPlans, toggle } = useContext(FitContext) as FitContextType;

    const totalDuration = (toggle ? myPlans : savedPlans).map(plan => plan.duration).reduce((total, duration) => total + duration, 0);
    const totalCalories = (toggle ? myPlans : savedPlans).map(plan => plan.caloriesBurned).reduce((total, caloriesBurned) => total + caloriesBurned, 0);


    return (
        <>
            <div className="px-6 pt-8 pb-6 bg-[#13161D] border border-[#232723] rounded-2xl flex items-center justify-between flex-col lg:flex-row ">

                <div className="space-y-1.5 w-full pb-4 lg:pb-0 flex items-center justify-between lg:block">
                    <p className="text-dim text-xs">Exercises</p>
                    <h1 className="text-4xl font-heading font-bold text-brand">{toggle ? myPlans.length : savedPlans.length}</h1>
                </div>



                <div className="space-y-1.5 w-full py-4 lg:py-0 lg:px-8 lg:border-x border-[#232732] border-y lg:border-y-0 flex items-center justify-between lg:block">
                    <p className="text-dim text-xs">Minutes</p>
                    <h1 className="text-4xl font-heading font-bold">{totalDuration}</h1>
                </div>




                <div className="space-y-1.5 w-full lg:pl-8 pt-4 lg:pt-0 flex items-center justify-between lg:block">
                    <p className="text-dim text-xs">Calories</p>
                    <h1 className="text-4xl font-heading font-bold">{totalCalories}</h1>
                </div>

            </div>
        </>
    )
}