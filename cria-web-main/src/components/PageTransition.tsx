
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePageTransition } from "@/context/PageTransitionContext";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const { isTransitioning, startTransition, endTransition } = usePageTransition();
  const [displayedChildren, setDisplayedChildren] = useState(children);

  useEffect(() => {
    // Start transition when location changes
    startTransition();
    
    // Small delay before updating children to ensure transition effect is visible
    const updateTimer = setTimeout(() => {
      setDisplayedChildren(children);
    }, 50);
    
    // End transition after animation completes
    const endTimer = setTimeout(() => {
      endTransition();
    }, 600);

    return () => {
      clearTimeout(updateTimer);
      clearTimeout(endTimer);
    };
  }, [location.pathname, children, startTransition, endTransition]);

  return (
    <div 
      className={`transition-all duration-500 ease-in-out ${
        isTransitioning 
          ? "opacity-0 transform translate-y-8 blur-sm" 
          : "opacity-100 transform translate-y-0 blur-0"
      }`}
    >
      {displayedChildren}
    </div>
  );
};

export default PageTransition;
