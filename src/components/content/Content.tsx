import React from "react";

export const Content: React.FC = ({ children }) => {
  return (
    <div className="Content">
      <span>{children}</span>
    </div>
  );
};
