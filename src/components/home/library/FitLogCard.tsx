import FitDataType from "@/types/FitDataType.type";
import { Clock, Flame, Star } from "lucide-react";
import Link from "next/link";
// import Image from "next/image";

export interface FitLogCardProps {
    fitLog: FitDataType;
}

export default function FitLogCard({ fitLog }: FitLogCardProps) {

    return (
        <>
            <Link href={`/books/${fitLog.id}`}>
                <div className="bg-[#15171d] border border-[#222630] rounded-2xl w-full cursor-pointer">
                    <div className="w-auto h-75 rounded-t-2xl overflow-hidden">
                        <div className="w-full h-full bg-top bg-no-repeat bg-cover transition-transform duration-500 hover:scale-105" style={{ backgroundImage: `url(${fitLog.image})` }}></div>
                        {/* <Image
                    src={fitLog.image}
                    alt={fitLog.name}
                    width={392}
                    height={192}
                    className="rounded-t-2xl w-auto"
                ></Image> */}
                    </div>
                    <div className="p-6 ">
                        <div className="space-y-1">
                            <div className="space-x-2">
                                {
                                    fitLog.muscleGroups.map(muscle => <span key={muscle} className="badge bg-brand text-background font-bold text-xs rounded-full">{muscle}</span>)
                                }

                            </div>
                            <h2 className="font-heading font-bold text-lg pt-2">{fitLog.name.toUpperCase()}</h2>
                            <p className="text-xs text-dim">{fitLog.equipment}</p>
                        </div>
                        <div className="pt-4">
                            <div className="border-t border-[#20242E] flex items-center gap-4 pt-3">
                                <span className="text-dim text-xs flex items-center gap-1.5"><Clock className="w-3.5" />{fitLog.duration} min</span>
                                <span className="text-dim text-xs flex items-center gap-1.5"><Flame className="w-3.5" fill="currentColor" />{fitLog.caloriesBurned} kcal</span>
                                <span className="text-dim text-xs flex items-center gap-1.5"><Star className="w-3.5" />{fitLog.rating}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}