import React from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";
interface SectionFooterProps {
  previousSection: string;
  nextSection: string;
}

export const SectionFooter: React.FC<SectionFooterProps> = ({ nextSection, previousSection }) => {
  return (
    <div className="SectionFooter">
      <div className="SectionFooter__links">
        <a href={`#${previousSection}`} className="SectionFooter__link">
          <SvgIcon iconName="arrowLeft" className="SectionFooter__linkIcon" />
        </a>
        <a href={`#${nextSection}`} className="SectionFooter__link">
          <SvgIcon iconName="arrowRight" className="SectionFooter__linkIcon" />
        </a>
      </div>
    </div>
  );
};
