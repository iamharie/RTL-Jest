import React, { useState, useEffect } from "react";

const ResponsiveText: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen && (
        <p>This text only shows on screens smaller than 600px</p>
      )}
    </div>
  );
};

export default ResponsiveText;
