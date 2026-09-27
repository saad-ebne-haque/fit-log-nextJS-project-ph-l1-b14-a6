"use client";

import FitDataType from "@/types/FitDataType.type";

import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useMemo,
    useState,
    useSyncExternalStore,
} from "react";

import { toast } from "react-toastify";


type Listener = () => void;

const createLocalStorageStore = <T,>(
    key: string,
    defaultValue: T
) => {

    let value = defaultValue;

    const listeners = new Set<Listener>();


    if (typeof window !== "undefined") {

        try {

            const storedData = localStorage.getItem(key);

            if (storedData) {
                value = JSON.parse(storedData);
            }

        } catch {

            value = defaultValue;

        }
    }


    const getSnapshot = () => value;

    const getServerSnapshot = () => defaultValue;


    const subscribe = (listener: Listener) => {

        listeners.add(listener);

        return () => {
            listeners.delete(listener);
        };

    };


    const setValue = (newValue: T) => {

        value = newValue;

        if (typeof window !== "undefined") {

            localStorage.setItem(
                key,
                JSON.stringify(value)
            );

        }

        listeners.forEach(
            (listener) => listener()
        );

    };


    return {
        getSnapshot,
        getServerSnapshot,
        subscribe,
        setValue,
    };
};




const myPlansStore = createLocalStorageStore<FitDataType[]>("myPlans", []);

const savedPlansStore = createLocalStorageStore<FitDataType[]>("savedPlans", []);


const alreadyDoneStore = createLocalStorageStore<FitDataType[]>("alreadyDone", []);


export interface FitContextType {

    myPlans: FitDataType[];

    savedPlans: FitDataType[];

    toggle: boolean;

    setToggle: Dispatch<SetStateAction<boolean>>;

    handleMyPlans: (plan: FitDataType) => void;

    handleSavedPlans: (plan: FitDataType) => void;

    handleRemove: (plan: FitDataType, removeFrom: "myPlans" | "savedPlans") => void;

    sortBy: "Duration" | "Rating" | "Calories";

    setSortBy: Dispatch<SetStateAction<"Rating" | "Calories" | "Duration">>;

    handleMarkAsDone: (plan: FitDataType) => void;

    alreadyDone: FitDataType[];
}


export const FitContext = createContext<FitContextType | null>(null);


const FitContextProvider = ({ children, }: { children: ReactNode; }) => {


    const myPlans = useSyncExternalStore(myPlansStore.subscribe, myPlansStore.getSnapshot, myPlansStore.getServerSnapshot);


    const savedPlans = useSyncExternalStore(savedPlansStore.subscribe, savedPlansStore.getSnapshot, savedPlansStore.getServerSnapshot);



    const alreadyDone = useSyncExternalStore(alreadyDoneStore.subscribe, alreadyDoneStore.getSnapshot, alreadyDoneStore.getServerSnapshot);



    const handleMyPlans = (plan: FitDataType): void => {

        const alreadyAdded = myPlans.some((myPlan) => myPlan.id === plan.id);


        if (alreadyAdded) {

            toast.error(`${plan.name} is already added to My Plan`);

            return;
        }


        if (myPlans.length >= 5) {

            toast.warning("You Already added 5 plans for today");

            return;
        }


        const updatedPlans = [...myPlans, plan,];


        myPlansStore.setValue(updatedPlans);


        toast.success(`${plan.name} is added to My Plan`);

    };




    const handleSavedPlans = (plan: FitDataType): void => {


        const alreadyAdded = savedPlans.some((savedPlan) => savedPlan.id === plan.id);


        if (alreadyAdded) {

            toast.error(`${plan.name} is already added to Saved Plan`);

            return;
        }


        const updatedPlans = [...savedPlans, plan];


        savedPlansStore.setValue(updatedPlans);


        toast.success(`${plan.name} is added to Saved Plan`);

    };




    const [toggle, setToggle] = useState<boolean>(true);




    const [sortBy, setSortBy] = useState<"Rating" | "Calories" | "Duration">("Duration");




    const handleMarkAsDone = (plan: FitDataType) => {

        const alreadyAdded = alreadyDone.some((fitlog) => fitlog.id === plan.id
        );


        if (alreadyAdded) {

            toast.warning(
                `${plan.name} Already Marked as done`
            );

            return;
        }


        const updatedPlans = [...alreadyDone, plan,];



        alreadyDoneStore.setValue(updatedPlans);


        toast.success(`Marked ${plan.name} as done`);

    };




    const handleRemove = (plan: FitDataType, removeFrom: "myPlans" | "savedPlans"): void => {


        if (removeFrom === "myPlans") {

            const updatedPlans = myPlans.filter((myPlan) => myPlan.id !== plan.id);


            myPlansStore.setValue(updatedPlans);


            toast.success(`${plan.name} is Successfully removed from Today's Plan`);


            return;
        }


        if (removeFrom === "savedPlans") {

            const updatedPlans = savedPlans.filter((savedPlan) => savedPlan.id !== plan.id);


            savedPlansStore.setValue(updatedPlans);


            toast.success(
                `${plan.name} is Successfully removed from Saved Plans`
            );

        }

    };




    const sortedMyPlans = useMemo(() => {

        return [...myPlans].sort((a, b) => {

            if (sortBy === "Duration") {

                return (b.duration - a.duration);

            }


            if (sortBy === "Calories") {

                return (b.caloriesBurned - a.caloriesBurned);

            }


            if (sortBy === "Rating") {

                return (b.rating - a.rating);

            }


            return 0;

        }
        );

    }, [myPlans, sortBy]);



    const sortedSavedPlans = useMemo(() => {

        return [...savedPlans].sort((a, b) => {

            if (sortBy === "Duration") {

                return (b.duration - a.duration);

            }


            if (sortBy === "Calories") {

                return (b.caloriesBurned - a.caloriesBurned);

            }


            if (sortBy === "Rating") {

                return (b.rating - a.rating);

            }


            return 0;

        }
        );

    }, [savedPlans, sortBy]);



    const contextValue:
        FitContextType = {
        myPlans: sortedMyPlans,
        savedPlans: sortedSavedPlans,
        toggle,
        setToggle,
        handleMyPlans,
        handleSavedPlans,
        handleRemove,
        sortBy,
        setSortBy,
        handleMarkAsDone,
        alreadyDone,
    };


    return (
        <FitContext.Provider value={contextValue}>{children}</FitContext.Provider>
    );

};


export default FitContextProvider;