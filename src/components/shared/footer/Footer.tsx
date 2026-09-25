import Image from "next/image";





const Footer = () => {



    return (
        <>
            <footer className=" py-4 lg:py-10 px-6 flex flex-col lg:flex-row items-center lg:justify-between border-t border-[#1A1D24] gap-3">
                <span className="flex items-center gap-2 cursor-pointer"><Image src='/assets/footLogo.png' alt="Footer logo " width={20} height={20}></Image> <h5 className="font-heading text-sm font-bold">FITLOG</h5></span>
                <p className=" text-[#6b7280] text-xs ">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </footer>

        </>
    );
};

export default Footer;