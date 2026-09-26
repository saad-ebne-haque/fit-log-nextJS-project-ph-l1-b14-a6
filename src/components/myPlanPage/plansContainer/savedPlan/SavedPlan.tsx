import FitDataType from "@/types/FitDataType.type";
import SavedPlanCard from "./SavedPlanCard";



export interface SavedPlanProps {
    plans: FitDataType[];
}

export default function SavedPlan({ plans }: SavedPlanProps) {

    return (
        <>
{
    plans.map(plan=><SavedPlanCard key={plan.id} plan={plan}></SavedPlanCard>)
}
        </>
    )
}