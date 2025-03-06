import { useEffect, useState, useCallback } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 600 ? true : false
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth < 1050 ? true : false
  );

  //debug
  //   const handleWindowResize = useCallback(() => {
  //     const width = window.innerWidth;
  //     console.log("Resize event - width:", width); // Debug log
  //     setIsMobile(width < 600);
  //   }, []);

  const throttledHandleWindowResize = () => {
    setIsMobile(window.innerWidth < 600 ? true : false);
    setIsTablet(window.innerWidth < 1050 ? true : false);
  };
  useEffect(() => {
    throttledHandleWindowResize();
    window.addEventListener("resize", throttledHandleWindowResize);
    return () => {
      window.removeEventListener("resize", throttledHandleWindowResize);
    };
  }, [throttledHandleWindowResize]);

  return { isMobile, setIsMobile, isTablet, setIsTablet };
}
