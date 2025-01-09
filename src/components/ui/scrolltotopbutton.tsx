'use client'

import { motion, Variants, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

const isBrowser = () => typeof window !== 'undefined';

const ScrollToTopContainerVariants: Variants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

function ScrollToTopButton() {
    const heightScale = 2;
    const controls = useAnimationControls();
    const [threshold, setThreshold] = useState(0);

    useEffect(() => {
        if (!isBrowser()) return;

        const updateThreshold = () => {
            setThreshold(window.innerHeight/heightScale);
        };

        const handleScroll = () => {
            if (window.scrollY > threshold) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        };

        window.addEventListener('resize', updateThreshold);
        window.addEventListener('scroll', handleScroll);

        // Initial check
        updateThreshold();
        handleScroll();

        return () => {
            window.removeEventListener('resize', updateThreshold);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls, threshold]);

    const scrollToTop = () => {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            className="fixed bottom-0 right-0 p-10 z-30"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none h-10 w-10 text-on-primary bg-primary">
                <ArrowUp />
            </div>
        </motion.button>
    );
}

export default ScrollToTopButton;