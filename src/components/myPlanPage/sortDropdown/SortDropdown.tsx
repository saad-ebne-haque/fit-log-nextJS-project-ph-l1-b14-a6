'use client';

import { FitContext, FitContextType } from "@/contexts/FitContext";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";





export default function SortDropdown() {
    const { sortBy, setSortBy } = useContext(FitContext) as FitContextType;


    return (
        <>
            <div className="flex items-center gap-3 ">

                <p className="text-xs text-dim">Sort By</p>


                <div className="dropdown dropdown-bottom dropdown-end ">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn font-normal text-xs m-1 bg-[#13161d] border-[#232732] rounded-lg w-26 flex justify-between"
                    >
                        {sortBy} <ChevronDown className="w-3.5" />
                    </div>
                    <ul tabIndex={-1} className="dropdown-content menu z-1 w-52 p-2 shadow-sm bg-[#13161d] border border-[#232732] rounded-lg">
                        <li onClick={() => setSortBy('Duration')}><a className={`btn rounded-lg  text-xs ${sortBy === 'Duration' ? 'bg-[#1f242d] border border-[#2b303d] font-bold' : 'btn-ghost text-dim font-normal'}`}>Duration</a></li>
                        <li onClick={() => setSortBy('Calories')}><a className={`btn rounded-lg  text-xs ${sortBy === 'Calories' ? 'bg-[#1f242d] border border-[#2b303d] font-bold' : 'btn-ghost text-dim font-normal'}`}>Calories </a></li>
                        <li onClick={() => setSortBy('Rating')}><a className={`btn rounded-lg  text-xs ${sortBy === 'Rating' ? 'bg-[#1f242d] border border-[#2b303d] font-bold' : 'btn-ghost text-dim font-normal'}`}>Rating</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}