import React from "react";

interface ContentProps {
  text: string;
}

export const Content: React.FC<ContentProps> = ({ text }) => {
  return (
    <div className="Content">
      <span className="Content__text">{text}</span>
    </div>
  );
};
