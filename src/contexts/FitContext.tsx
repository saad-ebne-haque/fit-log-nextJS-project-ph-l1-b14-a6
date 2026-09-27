
'use client';

import FitDataType from "@/types/FitDataType.type";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from "react";
import { toast } from "react-toastify";

// ==================== Types ====================

export interface FitContextType {
    myPlans: FitDataType[];
    savedPlans: FitDataType[];
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;

    handleMyPlans: (plan: FitDataType) => void;
    handleSavedPlans: (plan: FitDataType) => void;
    handleRemove: (
        plan: FitDataType,
        removeFrom: "myPlans" | "savedPlans"
    ) => void;

    sortBy: "Rating" | "Calories" | "Duration";
    setSortBy: Dispatch<
        SetStateAction<"Rating" | "Calories" | "Duration">
    >;

    handleMarkAsDone: (plan: FitDataType) => void;
    alreadyDone: FitDataType[];
}

// ==================== Context ====================

export const FitContext = createContext<FitContextType | null>(null);

// ==================== Provider ====================

const FitContextProvider = ({ children }: { children: ReactNode }) => {
    // ==================== My Plans ====================

    const [myPlans, setMyPlans] = useState<FitDataType[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }

        const storedData = localStorage.getItem("myPlans");

        return storedData ? JSON.parse(storedData) : [];
    });

    const handleMyPlans = (plan: FitDataType): void => {
        const alreadyAdded = myPlans.some(
            (myPlan) => myPlan.id === plan.id
        );
        if ((myPlans.length === 5) && !alreadyAdded) {
            toast.warning('You Already added 5 plans for today');
        }
        if (!alreadyAdded && (myPlans.length < 5)) {
            const updatedPlans = [...myPlans, plan];

            setMyPlans(updatedPlans);

            toast.success(`${plan.name} is added to My Plan`);
        }
        if (alreadyAdded) {
            toast.error(`${plan.name} is already added to My Plan`);
        }
    };

    useEffect(() => {
        localStorage.setItem("myPlans", JSON.stringify(myPlans));
    }, [myPlans]);

    // ==================== Saved Plans ====================

    const [savedPlans, setSavedPlans] = useState<FitDataType[]>(() => {
        if (typeof window === "undefined") {
            return [];
        }

        const storedData = localStorage.getItem("savedPlans");

        return storedData ? JSON.parse(storedData) : [];
    });

    const handleSavedPlans = (plan: FitDataType): void => {
        const alreadyAdded = savedPlans.some(
            (savedPlan) => savedPlan.id === plan.id
        );

        if (!alreadyAdded) {
            const updatedPlans = [...savedPlans, plan];

            setSavedPlans(updatedPlans);

            toast.success(`${plan.name} is added to Saved Plan`);
        } else {
            toast.error(`${plan.name} is already added to Saved Plan`);
        }
    };

    useEffect(() => {
        localStorage.setItem("savedPlans", JSON.stringify(savedPlans));
    }, [savedPlans]);

    // ==================== Toggle & Sorting ====================

    const [toggle, setToggle] = useState<boolean>(true);

    const [sortBy, setSortBy] = useState<
        "Rating" | "Calories" | "Duration"
    >("Duration");

    // ==================== Mark as Done ====================

    const [alreadyDone, setAlreadyDone] = useState<FitDataType[]>([]);

    const handleMarkAsDone = (plan: FitDataType) => {
        const alreadyAdded = alreadyDone.some(
            (fitlog) => fitlog.id === plan.id
        );

        if (!alreadyAdded) {
            const updatedPlans = [...alreadyDone, plan];

            setAlreadyDone(updatedPlans);

            toast.success(`Marked ${plan.name} as done`);
        } else {
            toast.warning(`${plan.name} Already Marked as done`);
        }
    };

    // ==================== Remove Plans ====================

    const handleRemove = (
        plan: FitDataType,
        removeFrom: "myPlans" | "savedPlans"
    ): void => {
        if (removeFrom === "myPlans") {
            const updatedPlans = myPlans.filter(
                (myPlan) => myPlan.id !== plan.id
            );

            setMyPlans(updatedPlans);

            toast.success(
                `${plan.name} is Successfully removed from Today's Plan`
            );
        }

        if (removeFrom === "savedPlans") {
            const updatedPlans = savedPlans.filter(
                (savedPlan) => savedPlan.id !== plan.id
            );

            setSavedPlans(updatedPlans);

            toast.success(
                `${plan.name} is Successfully removed from Saved Plans`
            );
        }
    };

    // ==================== Sort My Plans ====================

    const sortedMyPlans = useMemo(() => {
        return [...myPlans].sort((a, b) => {
            if (sortBy === "Duration") {
                return b.duration - a.duration;
            }

            if (sortBy === "Calories") {
                return b.caloriesBurned - a.caloriesBurned;
            }

            if (sortBy === "Rating") {
                return b.rating - a.rating;
            }

            return 0;
        });
    }, [sortBy, myPlans]);

    // ==================== Sort Saved Plans ====================

    const sortedSavedPlans = useMemo(() => {
        return [...savedPlans].sort((a, b) => {
            if (sortBy === "Duration") {
                return b.duration - a.duration;
            }

            if (sortBy === "Calories") {
                return b.caloriesBurned - a.caloriesBurned;
            }

            if (sortBy === "Rating") {
                return b.rating - a.rating;
            }

            return 0;
        });
    }, [savedPlans, sortBy]);

    // ==================== Context Value ====================

    const contextValue: FitContextType = {
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

    // ==================== Provider ====================

    return (
        <FitContext.Provider value={contextValue}>
            {children}
        </FitContext.Provider>
    );
};

export default FitContextProvider;
