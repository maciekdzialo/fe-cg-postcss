import classNames from "classnames";
import React from "react";
import { SectionFooter } from "../sectionFooter/SectionFooter";

interface SectionProps {
  id: string;
  previousSection: string;
  nextSection: string;
  header: React.ReactNode;
  content: React.ReactNode;
  additionalContent?: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  className,
  id,
  previousSection,
  nextSection,
  header,
  content,
  additionalContent,
}) => {
  return (
    <div className={classNames("Section", className)} id={id}>
      <div className="Section__content">
        {header}
        {content}
        {additionalContent}
      </div>
      <SectionFooter previousSection={previousSection} nextSection={nextSection} />
    </div>
  );
};
