'use client';

import FitDataType from "@/types/FitDataType.type";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { toast } from "react-toastify";

export interface FitContextType {
    myPlans: FitDataType[];
    // setMyPlans: Dispatch<SetStateAction<FitDataType[]>>;
    savedPlans: FitDataType[];
    // setSavedPlans: Dispatch<SetStateAction<FitDataType[]>>;
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
    handleMyPlans: (plan: FitDataType) => void;
    handleSavedPlans: (plan: FitDataType) => void;
}

export const FitContext = createContext<FitContextType | null>(null);

const FitContextProvider = ({ children }: { children: ReactNode }) => {

    const [myPlans, setMyPlans] = useState<FitDataType[]>([]);
    const [savedPlans, setSavedPlans] = useState<FitDataType[]>([]);

    const [toggle, setToggle] = useState<boolean>(false);

    const handleMyPlans = (plan: FitDataType): void => {

        if (!myPlans.some(myPlan => myPlan.id === plan.id)) {

            const updatedPlans: FitDataType[] = [...myPlans, plan];
            setMyPlans(updatedPlans);
            toast.success(`${plan.name} is added to My Plan`);
        } else {
            toast.error(`${plan.name} is already added to My Plan`);
        }

    };

    const handleSavedPlans = (plan: FitDataType): void => {
         if (!myPlans.some(myPlan => myPlan.id === plan.id)) {

            const updatedPlans: FitDataType[] = [...myPlans, plan];
            setSavedPlans(updatedPlans);
            toast.success(`${plan.name} is added to Saved Plan`);
        } else {
            toast.error(`${plan.name} is already added to Saved Plan`);
        }
    }

    console.log(myPlans);
    const contextValue = { myPlans, savedPlans, toggle, setToggle, handleSavedPlans, handleMyPlans };

    return (
        <>
            <FitContext.Provider value={contextValue}>
                {children}
            </FitContext.Provider>
        </>
    );
};

export default FitContextProvider;