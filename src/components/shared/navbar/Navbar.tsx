import Image from "next/image";
import NavMenus from "./NavMenus";
import Link from "next/link";
import NavbarBTNs from "./NavbarBTNs";




const Navbar = () => {



    return (
        <>

            <nav className="bg-background shadow-sm border-b border-[#1c1f26] shadow-[#1c1f26] sticky top-0 z-100">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-background rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <NavMenus></NavMenus>
                            </ul>
                        </div>
                        <Link href='/'>
                            <span className="btn btn-ghost rounded-full text-xl flex items-center gap-2.5 font-heading">
                                <Image src="/assets/logo.png" alt="FitLog Logo" width={28} height={28} />
                                FITLOG
                            </span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <NavMenus></NavMenus>
                        </ul>
                    </div>
                    <div className="navbar-end">
                     <NavbarBTNs></NavbarBTNs>
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Navbar;