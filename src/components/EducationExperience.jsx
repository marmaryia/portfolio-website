import ExEdTimeline from "./ExEdTimeline";
import "../styles/EducationExperience.css";

function EducationExperience({ refCallback }) {
  return (
    <section
      id="education-experience"
      ref={refCallback}
      className="main-section"
    >
      <h1>Experience</h1>
      <ExEdTimeline />
    </section>
  );
}

export default EducationExperience;
