import BookDetailsPageBtns from "@/components/bookDetailsPage/BookDetailsPageBtns";
import FitDataType from "@/types/FitDataType.type";
import Image from "next/image";

export interface BookDetailsPagePageProps {
    params: Promise<{ id: string }>
}

export default async function BookDetailsPagePage({ params }: BookDetailsPagePageProps) {
    const { id }: { id: string } = await params;

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const fitLog: FitDataType = await res.json();


    const isSuccess: boolean = String(id) === String(fitLog.id);



    return (
        isSuccess ? <>
            <section className="flex items-start gap-14 justify-between ">
                <div className="rounded-2xl overflow-hidden w-full">
                    <Image
                        src={fitLog.image}
                        alt={fitLog.name}
                        width={588}
                        height={735}
                        className="rounded-2xl w-full h-auto hover:scale-110 transition-transform duration-500 "></Image>
                </div>

                <div className="w-full">

                    <h1 className="pb-3 font-heading font-bold text-4xl">{fitLog.name.toUpperCase()} </h1>

                    <p className="pb-5 text-dim leading-relaxed">{fitLog.description}</p>

                    <div className="pb-7 space-x-2.5">
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

                        <h3 className=" font-extrabold">INSTRUCTIONS</h3>

                        <ol className="list-decimal space-y-3 mt-3 text-sm text-dim pl-3.5">
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
                Notfound
            </>
    )
}