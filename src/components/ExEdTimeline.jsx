import Timeline from "@mui/lab/Timeline";
import TimelineItemCard from "./TimelineItemCard";
import { useState, useEffect } from "react";

function ExEdTimeline() {
  const experienceData = [
    {
      dates: "January – April 2025",
      image: "study.png",
      position: "Software Development Trainee",
      organisation: "Northcoders, UK (remote)",
      description: `Mastered the fundamentals of coding with JavaScript, studied
              common software engineering tools and techniques, explored APIs,
              relational databases, frontend and backend development, practised
              TDD and pair-programming, created full-stack projects`,
    },
    {
      dates: "March 2022 – January 2025",
      image: "work.png",
      position: "Linguist",
      organisation: "TransPerfect Translations Limited, London (hybrid)",
      description: `Worked on translations in a quality management team, used
              industry-standard automation tools to improve efficiency and
              customer satisfaction, audited independent contractors, reviewed
              tests and provided feedback, created and updated style guide
              templates`,
    },
    {
      dates: "February 2019 – June 2021",
      image: "work.png",
      position: "Translator",
      organisation: "Nimteko LLC, Minsk (on-site)",
      description: `Translated technical documentation and correspondence, interpreted
              during phone calls and eye-to-eye meetings, drove integration of
              industry-standard automation tools to improve efficiency`,
    },
    {
      dates: "September 2014 – June 2019",
      image: "study.png",
      position: "Student",
      organisation: "Minsk State Linguistic University, Minsk (on-site)",
      description: `Completed a five-year full-time programme equivalent to the UK
              Bachelor's, developed both written translation and oral
              interpretation skills in Russian, English, German and Spanish,
              specialised in simultaneous interpretation`,
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function updateWidth() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Timeline position={windowWidth > 1000 ? "alternate" : "right"}>
      {experienceData.map((item, i) => (
        <TimelineItemCard
          key={i}
          experienceData={item}
          windowWidth={windowWidth}
        />
      ))}
    </Timeline>
  );
}

export default ExEdTimeline;
