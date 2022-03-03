import classnames from "classnames";
import React from "react";

export type Level = 1 | 2 | 3 | 4 | 5;

export interface HeaderProps {
  content: string;
  className?: string;
  level: Level;
}

export const Header = (props: HeaderProps) => {
  const { content, level, className } = props;
  const CustomH = `h${level}` as keyof JSX.IntrinsicElements;

  return <CustomH className={classnames("Header", className)}>{content}</CustomH>;
};
