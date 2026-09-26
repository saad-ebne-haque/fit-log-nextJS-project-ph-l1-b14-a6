import FitDataType from "@/types/FitDataType.type";
import SavedPlanCard from "./SavedPlanCard";



export interface SavedPlanProps {
    plans: FitDataType[];
}

export default function SavedPlan({ plans }: SavedPlanProps) {

    return (
        <>
            <div className="space-y-4">

                {
                    plans.map(plan => <SavedPlanCard key={plan.id} plan={plan}></SavedPlanCard>)
                }
            </div>
        </>
    )
}