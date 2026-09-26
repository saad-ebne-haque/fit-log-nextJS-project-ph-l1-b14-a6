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
    handleRemove: (plan: FitDataType, removeFrom: 'myPlans' | 'savedPlans') => void;
}



export const FitContext = createContext<FitContextType | null>(null);


const FitContextProvider = ({ children }: { children: ReactNode }) => {


    const [myPlans, setMyPlans] = useState<FitDataType[]>([]);
    const [savedPlans, setSavedPlans] = useState<FitDataType[]>([]);

    const [toggle, setToggle] = useState<boolean>(true);

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
        if (!savedPlans.some(myPlan => myPlan.id === plan.id)) {

            const updatedPlans: FitDataType[] = [...savedPlans, plan];
            setSavedPlans(updatedPlans);
            toast.success(`${plan.name} is added to Saved Plan`);
        } else {
            toast.error(`${plan.name} is already added to Saved Plan`);
        }
    }




    const handleRemove = (plan: FitDataType, removeFrom: 'myPlans' | 'savedPlans'): void => {

        if (removeFrom === 'myPlans') {
            const updatedPlans: FitDataType[] = myPlans.filter(myPlan => myPlan.id !== plan.id);
            setMyPlans(updatedPlans);
            toast.success(`${plan.name} is Successfully removed from Today's Plan`);
        }

        if (removeFrom === 'savedPlans') {
            const updatedPlans: FitDataType[] = savedPlans.filter(myPlan => myPlan.id !== plan.id);
            setSavedPlans(updatedPlans);
            toast.success(`${plan.name} is Successfully removed from Saved Plans`);
        }
    }



















    const contextValue = { myPlans, savedPlans, toggle, setToggle, handleSavedPlans, handleMyPlans, handleRemove };



    return (
        <>
            <FitContext.Provider value={contextValue}>
                {children}
            </FitContext.Provider>
        </>
    );
};



export default FitContextProvider;