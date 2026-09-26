import PlansContainer from "@/components/myPlanPage/plansContainer/PlansContainer";
import SortDropdown from "@/components/myPlanPage/sortDropdown/SortDropdown";
import Stats from "@/components/myPlanPage/stats/Stats";
import ToggleBtn from "@/components/myPlanPage/toggleBtn/ToggleBtn";



const MyPlanePage = () => {



    return (
        <>
            <section className="space-y-6">

                <div className="space-y-2">
                    <h2 className="text-3xl font-bold font-heading tracking-tight">MY PLAN</h2>
                    <p className="text-sm text-dim ">Cap of five lifts for today. Finish them, then load more.</p>
                </div>

                <Stats></Stats>

                <div className="pt-2 flex items-center justify-between">
                    <ToggleBtn></ToggleBtn>
                    <SortDropdown></SortDropdown>
                </div>




                <PlansContainer></PlansContainer>


            </section>

        </>
    );
};

export default MyPlanePage;