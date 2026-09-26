import FitDataType from "@/types/FitDataType.type";
import TodaysPlanCard from "./TodaysPlanCard";




export interface TodaysPlanProps {
    plans: FitDataType[];
}

export default function TodaysPlan({ plans }: TodaysPlanProps) {

    return (
        <>
            <div className="space-y-4">
                {
                    plans.map(plan =><TodaysPlanCard key={plan.id} plan={plan}></TodaysPlanCard>)
                }
            </div>
        </>
    )
}