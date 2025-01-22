
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
        <header className="text-on-primary-container bg-primary-container border-b-6 border-primary-border min-w-fit">
            <div className="container constrained-width mx-auto flex p-4 flex-row items-center">
                <Link href="/" className="flex font-black font-space-grotesk items-center text-on-primary-container">
                    {/* Icon */}
                    <ATLogo className="h-10 ml-1 mr-auto md:mr-0 md:ml-0 text-primary-vibrant" />
                    <span className="hidden md:block ml-2 mr-2 text-4xl tracking-tight">Analytic Talesmith</span>
                </Link>
                    {/* MD and above nav*/}
                    <nav className="hidden md:block md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-primary-border md:flex md:flex-wrap items-center text-base justify-center">
                        <ul className="flex flex-row mt-4 font-medium ml-auto md:mt-0 space-x-4">
                                        {navLinks.map(({ route, text }) => (
                                            <li key={route} className="relative group flex items-center">
                                            <Link 
                                                href={route} 
                                                className="font-spaceGrotesk text-lg uppercase block px-3 py-2 text-on-surface-container lg:bg-transparent hover:text-primary-vibrant transition-all duration-200"
                                            >
                                                {text}
                                            </Link>
                                            <span 
                                                className="absolute bottom-0 left-0 w-0 h-1 bg-primary-border transition-all group-hover:w-full duration-500"
                                            ></span>
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