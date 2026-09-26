// import { Suspense } from "react";

import FitDataType from "@/types/FitDataType.type";
import FitLogCard from "./FitLogCard";




const TheLibrary = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog',
        { cache: 'force-cache' }
    );
    const fitLogs: FitDataType[] = await res.json();


    return (
        <>
            <section id="the-library" className="pt-16 space-y-8 scroll-mt-16">
                <div className="text-center lg:text-left space-y-1">
                    <h2 className="font-bold font-heading text-3xl tracking-tight">THE LIBRARY</h2>
                    <p className="text-dim text-sm">Twelve lifts covering every major muscle group.</p>
                </div>



                {/* Card Container */}
                {/* <Suspense> */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        fitLogs.map((fitLog: FitDataType) => <FitLogCard key={fitLog.id} fitLog={fitLog}></FitLogCard>)
                    }
                </div>

                {/* </Suspense> */}

            </section>

        </>
    );
};

export default TheLibrary;