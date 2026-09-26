"use client";

import { useContext } from "react";
import TodaysPlan from "./todaysPlan/TodaysPlan";
import { FitContext, FitContextType } from "@/contexts/FitContext";
import EmptyPlan from "./emptyPlan/EmptyPlan";
import SavedPlan from "./savedPlan/SavedPlan";





const PlansContainer = () => {
    const { myPlans, savedPlans, toggle } = useContext(FitContext) as FitContextType;


    return (
        <>
            {
                toggle
                    ? myPlans.length === 0
                        ? <EmptyPlan></EmptyPlan>
                        : <TodaysPlan plans={myPlans}></TodaysPlan>
                    :
                    savedPlans.length === 0
                        ? <EmptyPlan></EmptyPlan>
                        : <SavedPlan plans={savedPlans}></SavedPlan>
            }
            {/* <EmptyPlan></EmptyPlan> */}
        </>
    );
};

export default PlansContainer;