import React from "react";
import { courseData } from "../../static/data/data";
import { lower } from "../../utils/utils";
import { Content } from "../content/Content";
import { Header } from "../header/Header";
import { Section } from "../section/Section";
export const SectionList = () => {
  return (
    <div className="SectionList">
      {courseData.map((slide, index) => (
        <Section
          key={index}
          id={`${index}`}
          previousSection={`${index - 1}`}
          nextSection={`${index + 1}`}
          className={`SectionList__${lower(slide.class)}`}
          header={<Header content={slide.title} level={2} />}
          content={<Content text={slide.contentText} />}
          additionalContent={slide.additionalContent}
        />
      ))}
    </div>
  );
};
