import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Output: React.FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Output;
