import { MobileNavButton } from "./mobilenavbutton";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface linkData {
  route: string;
  text: string;
}
const MobileNavSheet = ({ links }: { links: linkData[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MobileNavButton />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-primary-accent to-secondary-accent">
        <span className="sr-only">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
        </span>
        <SheetClose asChild>
          <div>
            <ul className="font-spaceGrotesk flex flex-col justify-center items-center">
              <div className="bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
                {links.map(({ route, text }) => (
                  <li
                    key={route}
                    className="px-4 cursor-pointer font-bold capitalize py-6 text-4xl"
                  >
                    <Link href={route}>{text}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export { MobileNavSheet };
