import Image from "next/image";




const Banner = () => {



    return (
        <>
            <section className="bg-[#15171D] border border-[#222630] rounded-2xl text-center lg:text-left p-14 flex flex-col-reverse lg:flex-row items-center justify-around gap-5">
                <div className="space-y-3 lg:space-y-5">
                    <p className="font-bold text-xs text-brand">WORKOUT LIBRARY</p>
                    <h1
                        className="font-extrabold font-heading tracking-tight text-3xl md:text-4xl lg:text-6xl lg:max-w-139.5">
                        TRAIN WITH INTENT. LOG
                        EVERY SET.
                    </h1>
                    <p className="text-dim lg:leading-relaxed text-xs lg:text-[16px] max-w-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into {"today's"} plan, and watch the {"week's"} work add up.
                    </p>
                    <a className="btn bg-brand text-xs text-background font-bold" href="#the-library">BROWSE WORKOUTS</a>
                </div>
                <Image
                    src='/assets/banner.png'
                    alt="Fit log Hero/Banner Image"
                    width={335}
                    height={335}
                    priority
                ></Image>
            </section>

        </>
    );
};

export default Banner;