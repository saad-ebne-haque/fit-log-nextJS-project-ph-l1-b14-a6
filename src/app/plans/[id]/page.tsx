
import BookDetailsPageBtns from "@/components/planDetailsPage/PlanDetailsPageBtns";
import FitDataType from "@/types/FitDataType.type";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface BookDetailsPagePageProps {
    params: Promise<{ id: string }>
}

export default async function BookDetailsPagePage({ params }: BookDetailsPagePageProps) {
    const { id }: { id: string } = await params;

    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
    const fitLog: FitDataType = await res.json();


    const isSuccess: boolean = String(id) === String(fitLog.id);



    return (
        isSuccess ? <>
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

                    <div className="mb-9">

                        <h3 className=" font-extrabold text-center">INSTRUCTIONS</h3>

                        <ol className="lg:list-decimal space-y-3 mt-3 text-sm text-dim lg:pl-3.5 text-center">
                            {
                                fitLog.instructions.map((instruction, i) => <li key={i}
                                    className="pl-2">{instruction} </li>)
                            }
                        </ol>

                    </div>

                    <BookDetailsPageBtns plan={fitLog}></BookDetailsPageBtns>

                </div>

            </section>
        </>



            :


            <>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
                <div className="bg-[#151922] border border-[#232834] p-6 rounded-3xl max-w-md w-full shadow-xl flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-2">
                        <AlertCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading">Plan Not Found</h2>
                    <p className="text-dim text-sm">
                        The fitness plan you are looking for does not exist or may have been removed.
                    </p>
                    <Link 
                        href="/" 
                        className="btn bg-brand text-black hover:bg-brand/80 rounded-full w-full mt-4 flex items-center justify-center gap-2 font-semibold">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        </>
    )
}