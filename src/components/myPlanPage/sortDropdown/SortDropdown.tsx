

// export interface SortDropdownProps {
//     prop: string
// }

import { ChevronDown } from "lucide-react";

export default function SortDropdown() {

    return (
        <>
            <div className="flex items-center gap-3">

                <p className="text-xs text-dim">Sort By</p>


                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn font-normal text-xs m-1 bg-[#13161d] border-[#232732] rounded-lg">Duration <ChevronDown /></div>
                    <ul tabIndex={-1} className="dropdown-content menu z-1 w-52 p-2 shadow-sm bg-[#13161d] border border-[#232732] rounded-lg">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}