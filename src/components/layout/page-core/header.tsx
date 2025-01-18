
import { ATLogo } from '@/components/svgs/logo';
import Link from "next/link";
import { MobileNavSheet } from './mobilenavsheet';
import { ColorModeToggle } from './ColorModeToggle';

const WebsiteHeading = () => {
    

    const navLinks = [
        {
            route: "/blog",
            text: "Blog",

        }, {
            route: "/portfolio",
            text: "Portfolio",

        }, {
            route: "/about",
            text: "About",

        },
    ];

    return(
        <header className="text-on-primary-card bg-primary-card border-b-6 border-border min-w-fit">
            <div className="container mx-auto flex p-4 flex-row items-center">
                <Link href="/" className="flex font-black font-space-grotesk items-center text-gray-900">
                    {/* Icon */}
                    <ATLogo className="h-10 ml-1 mr-auto md:mr-0 md:ml-0" />
                    <span className="hidden md:block ml-2 mr-2 text-2xl tracking-tight text-primary">Analytic Talesmith</span>
                </Link>
                    {/* MD and above nav*/}
                    <nav className="hidden md:block md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-primary-border flex flex-wrap items-center text-base justify-center">
                        <ul className="flex flex-row mt-4 font-medium ml-auto md:mt-0">
                                        {navLinks.map(({ route, text }) => (
                                            <li
                                                key={route}
                                                className="font-spaceGrotesk capitalize block py-2 pr-4 pl-3 text-on-surface-container rounded lg:bg-transparent hover:text-primary-container duration-200 hover:underline"
                                            >
                                                <Link href={route}>{text}</Link>
                                            </li>
                                        ))}
                        </ul>
                    </nav>
                    
                <div className="ml-auto flex flex-row">
                    < ColorModeToggle />
                    {/* Mobile nav */}
                    <MobileNavSheet links={navLinks} />
                </div>
                </div>
        </header>
    )
}


export default WebsiteHeading;