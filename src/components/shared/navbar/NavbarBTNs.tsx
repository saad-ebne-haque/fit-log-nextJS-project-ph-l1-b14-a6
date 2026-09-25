'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import Link from "next/link";
import { useContext } from "react";




const NavbarBTNs = () => {
    const context = useContext(FitContext) as FitContextType;

    const { myPlans, savedPlans } = context;


    return (
        <>
            <Link
                href='/my-plan'
                className="btn btn-ghost rounded-full text-[#d1d5db] font-medium"
            >
                Plan
                <span
                    className="badge badge-lg bg-brand text-background  rounded-full"
                >
                    {myPlans.length}
                </span>
            </Link >
            <Link
                href='/my-plan'
                className="btn btn-ghost rounded-full text-dim font-medium "
            >
                Saved
                <span
                    className="badge badge-outline badge-lg bg-transparent border-[1.5px] border-[#2D313B] rounded-full"
                >
                    {savedPlans.length}
                </span>
            </Link>

        </>
    );
};

export default NavbarBTNs;