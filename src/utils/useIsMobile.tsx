import { useEffect, useState, useCallback } from "react";

export function useIsMobile() {
  // Lazy initialization of states
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 600);
  const [isTablet, setIsTablet] = useState(() => window.innerWidth < 1050);

  const handleWindowResize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width < 600);
    setIsTablet(width < 1050);
  }, []);

  useEffect(() => {
    // Initial check
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);

  // Only return what's needed
  return { isMobile, isTablet };
}
