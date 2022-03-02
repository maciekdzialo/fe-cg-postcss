import classnames from "classnames";
import React from "react";

export type Level = 1 | 2 | 3 | 4 | 5;

export interface TitleProps {
  children: React.ReactNode;
  className?: string;
  level: Level;
}

export const Title = (props: TitleProps) => {
  const { children, level, className } = props;
  const CustomH = `h${level}` as keyof JSX.IntrinsicElements;

  return <CustomH className={classnames("Header", className)}>{children}</CustomH>;
};
