import { Button } from '@/components/ui/button';
import { AlignJustify } from "lucide-react";

const MobileNavButton = () => {
    return(
        <Button color="Primary" size="icon" className ="block ml-12 mr-6 md:hidden">
            <AlignJustify className="h-[1.2rem] w-[1.2rem] m-auto rotate-0 scale-100" />
            <span className="sr-only">Toggle theme</span></Button>
    )
}

export { MobileNavButton }