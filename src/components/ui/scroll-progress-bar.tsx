"use client"

import { useEffect, useState } from "react";

export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    }

    const observer = new MutationObserver(() => {
      updateScrollCompletion(); // Recalculate on DOM changes
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    window.addEventListener("scroll", updateScrollCompletion);
    updateScrollCompletion();

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
      observer.disconnect();
    };
  }, []);

  return completion;
}

export default function NavBar() {
    const completion = useReadingProgress();
    return (
      <nav className="sticky z-50 top-0 backdrop-blur-3xl pb-1 bg-background border-b-2 border-border">
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 100}%)`,
          }}
          className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-primary`}
        />
        {/* Rest of the NavBar */}
      </nav>
    );
  }