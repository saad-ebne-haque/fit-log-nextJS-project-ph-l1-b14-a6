import Link from "next/link";





const EmptyPlan = () => {



    return (
        <>

            <div
                className=" px-4 py-24 flex flex-col items-center justify-center bg-[#111317]/60 border border-dashed border-white/10 rounded-xl text-center"
            >
                <h3 className="font-heading font-bold text-xl tracking-wide pb-2">NOTHING HERE YET</h3>
                <p className="text-xs text-dim pb-6">Browse the library and add a lift to get today moving.</p>
                <Link href='/#the-library'><button className="btn text-xs font-semibold bg-brand text-background rounded-full">Go to workouts</button></Link>
            </div>

        </>
    );
};

export default EmptyPlan;