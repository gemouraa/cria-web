
import React, { createContext, useState, useContext, useCallback } from "react";

type PageTransitionContextType = {
  isTransitioning: boolean;
  startTransition: () => void;
  endTransition: () => void;
};

const PageTransitionContext = createContext<PageTransitionContextType | undefined>(undefined);

export const PageTransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
  }, []);
  
  const endTransition = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return context;
};
