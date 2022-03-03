import React from "react";
import { ReactSVG } from "react-svg";
import arrowLeft from "../../static/icons/left-arrow-line.svg";
import arrowRight from "../../static/icons/right-arrow-line.svg";

interface SectionFooterProps {
  previousSection: string;
  nextSection: string;
}

export const SectionFooter: React.FC<SectionFooterProps> = ({ nextSection, previousSection }) => {
  return (
    <div className="SectionFooter">
      <div className="SectionFooter__links">
        <a href={`#${previousSection}`} className="SectionFooter__link">
          <ReactSVG src={arrowLeft} className="SectionFooter__linkIcon" />
        </a>
        <a href={`#${nextSection}`} className="SectionFooter__link">
          <ReactSVG src={arrowRight} className="SectionFooter__linkIcon" />
        </a>
      </div>
    </div>
  );
};
