'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMenuInterface {
    path: string;
    title: string;
}



const NavMenus = () => {
    const pathName = usePathname();

    const navMenu: NavMenuInterface[] = [
        { path: '/', title: 'Workouts' },
        { path: '/my-plan', title: 'My Plan' }
    ];


    return (
        <>
            {
                navMenu.map(menu => {
                    const isActive: boolean = menu.path === pathName;




                    return <li
                        key={menu.path}
                        className={`rounded-full ${isActive ? 'bg-brand/15 font-semibold text-brand' : 'text-dim font-medium'}`}
                    >
                        <Link href={menu.path}>
                            {menu.title}
                        </Link>
                    </li>
                })
            }

        </>
    );
};

export default NavMenus;