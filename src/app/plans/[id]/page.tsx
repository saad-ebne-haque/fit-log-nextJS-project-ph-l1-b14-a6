

import PlanDetailsPageBtns from "@/components/planDetailsPage/PlanDetailsPageBtns";
import FitDataType from "@/types/FitDataType.type";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export interface PlanDetailsPagePageProps {
    params: Promise<{ id: string }>
}


export const generateStaticParams = async () => {

    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    const fitLogs: FitDataType[] = await res.json();

    return fitLogs.map(fitlog =>
    ({
        id: String(fitlog.id)
    })
    );
}

export const generateMetadata = async ({ params }: PlanDetailsPagePageProps): Promise<Metadata> => {

    const { id } = await params;

    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, { cache: 'no-store' });

    if (!res.ok) {
        return {
            title: 'Plan Not Found',
            description: 'The fitness plan you are looking for was not found.'
        }
    }

    const fitLog: FitDataType = await res.json();

    return (
        {
            title: `${fitLog.name} | Fit Log`,
            description: fitLog.description
        }
    )


}

export default async function BookDetailsPagePage({ params }: PlanDetailsPagePageProps) {
    const { id }: { id: string } = await params;

    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        notFound();
    }
    const fitLog: FitDataType = await res.json();





    return (
        <>
            <section className="flex lg:items-start gap-14 justify-between flex-col lg:flex-row items-center">
                <div className="rounded-2xl overflow-hidden w-full">
                    <Image
                        src={fitLog.image}
                        alt={fitLog.name}
                        width={588}
                        height={735}
                        className="rounded-2xl w-full h-auto hover:scale-110 transition-transform duration-500 "></Image>
                </div>

                <div className="w-full">

                    <h1 className="text-center lg:text-left pb-3 font-heading font-bold text-4xl">{fitLog.name.toUpperCase()} </h1>

                    <p className="text-center lg:text-left pb-5 text-dim leading-relaxed">{fitLog.description}</p>

                    <div className="pb-7 space-x-2.5 text-center lg:text-left">
                        {
                            fitLog.muscleGroups.map(muscle =>
                                <span key={muscle}
                                    className="badge badge-md rounded-full bg-brand text-background text-xs font-semibold" >{muscle}</span>
                            )
                        }
                    </div>

                    <div className="rounded-2xl bg-[#151922] border border-[#232834] mb-8">


                        <div className="px-6 py-3.5 border-b border-[#232834] flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200 rounded-t-2xl ">
                            <p className="text-dim text-xs font-bold">EQUIPMENT</p>
                            <p className="font-medium text-sm">{fitLog.equipment}</p>
                        </div>


                        <div className="px-6 py-3.5 border-b border-[#232834] flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200">
                            <p className="text-dim text-xs font-bold">DIFFICULTY</p>
                            <p className="font-medium text-sm">{fitLog.difficulty}</p>
                        </div>


                        <div className="px-6 py-3.5 border-b border-[#232834] flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200">
                            <p className="text-dim text-xs font-bold">SETS</p>
                            <p className="font-medium text-sm">{fitLog.sets}</p>
                        </div>


                        <div className="px-6 py-3.5 border-b border-[#232834] flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200">
                            <p className="text-dim text-xs font-bold">REPS</p>
                            <p className="font-medium text-sm">{fitLog.reps}</p>
                        </div>


                        <div className="px-6 py-3.5 border-b border-[#232834] flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200">
                            <p className="text-dim text-xs font-bold">DURATION</p>
                            <p className="font-medium text-sm">{fitLog.duration} min</p>
                        </div>


                        <div className="px-6 py-3.5 border-b border-[#232834] flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200">
                            <p className="text-dim text-xs font-bold">CALORIES</p>
                            <p className="font-medium text-sm">{fitLog.caloriesBurned} kcal</p>
                        </div>


                        <div className="px-6 py-3.5  flex items-center justify-between hover:scale-102 hover:shadow bg-[#151922] transition-all duration-200 rounded-b-2xl">
                            <p className="text-dim text-xs font-bold">RATING</p>
                            <p className="font-medium text-sm">{fitLog.rating}</p>
                        </div>



                    </div>

                    <div className="mb-9 flex flex-col items-center lg:items-start">

                        <h3 className=" font-extrabold text-center">INSTRUCTIONS</h3>

                        <ol className="list-decimal space-y-3 mt-3 text-sm text-dim lg:pl-3.5 text-left">
                            {
                                fitLog.instructions.map((instruction, i) => <li key={i}
                                    className="pl-2">{instruction} </li>)
                            }
                        </ol>

                    </div>

                    <PlanDetailsPageBtns plan={fitLog}></PlanDetailsPageBtns>

                </div>

            </section>
        </>




    )
}