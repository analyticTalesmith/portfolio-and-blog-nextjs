// //ColorModeToggle

// "use client"

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// export function ColorModeToggle() {
//   const { setTheme } = useTheme()

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild className="ml-12 mr-0">
//           <Button variant="default" size="icon" buttoncolor="primary">
//             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }

"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ColorModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  // Track what the theme is set to (system/light/dark)
  const { theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);

    if (theme === 'system') {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = () => {
        // Don't manually set theme here - next-themes will handle it
        // Just let the system preference change propagate
      };

      matchMedia.addEventListener('change', handleSystemThemeChange);
      return () => matchMedia.removeEventListener('change', handleSystemThemeChange);
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  // Get the icon based on the setting (not the resolved theme)
  const getCurrentIcon = () => {
    switch (theme) {
      case 'system':
        return <Monitor className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />;
      case 'light':
        return <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />;
      case 'dark':
        return <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />;
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 p-2" asChild>
        <Button color="primary" size="icon">{getCurrentIcon()}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
          <Monitor className="h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export {ColorModeToggle};