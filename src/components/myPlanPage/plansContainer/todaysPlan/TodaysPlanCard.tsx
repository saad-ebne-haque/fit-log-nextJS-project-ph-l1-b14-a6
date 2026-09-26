import FitDataType from "@/types/FitDataType.type";
import { Clock, Flame, Star, } from "lucide-react";
import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import MarkAsDoneBtn from "./MarkAsDoneBtn";

export interface TodaysPlanCardProps {
    plan: FitDataType;
}

export default function TodaysPlanCard({ plan }: TodaysPlanCardProps) {

    return (
        < div className="border border-[#232732] bg-[#14171E] rounded-2xl p-4 flex items-center justify-between">

            <div className=" flex flex-col md:flex-row lg:items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-4">
                    <div className="rounded-xl w-36 h-20  overflow-hidden">
                        <div
                            style={{ backgroundImage: `url(${plan.image})` }}
                            className="w-full h-full bg-no-repeat bg-cover bg-top"></div>
                    </div>


                    <div className="space-y-0.5">
                        <h3 className="font-heading tracking-wide font-bold">{plan.name.toUpperCase()}</h3>
                        <p className="text-dim text-xs font-semibold">{plan.equipment}</p>
                        <div className="pt-1.5 flex items-center gap-3">
                            <span className="flex items-center gap-1.5 text-xs text-[#d1d5db]"><Clock className="text-brand w-3.5"></Clock>{plan.duration} min</span>
                            <span className="flex items-center gap-1.5 text-xs text-[#d1d5db]"><Flame fill="currentColor" className="text-brand w-3.5"></Flame>{plan.caloriesBurned} kcal</span>
                            <span className="flex items-center gap-1.5 text-xs text-[#d1d5db]"><Star className="text-brand w-3.5"></Star>{plan.rating} </span>
                        </div>
                    </div>



                </div>
                <div className="flex items-center gap-3">
                    <Link href={`/plans/${plan.id}`} className="btn btn-ghost text-xs font-normal border border-[#374151] rounded-full">View Details</Link>
                    <MarkAsDoneBtn name={plan.name}></MarkAsDoneBtn>
                    <RemoveBtn plan={plan} removeFrom="myPlans" clsName='hidden lg:block'></RemoveBtn>
                </div>
            </div >
            <RemoveBtn plan={plan} removeFrom="myPlans" clsName='lg:hidden'></RemoveBtn>
        </div>
    )
}