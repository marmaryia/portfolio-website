import ExEdTimeline from "./ExEdTimeline";
import "../styles/EducationExperience.css";

function EducationExperience({ refCallback }) {
  return (
    <section id="education-experience" ref={refCallback}>
      <h2>Edication & Experience</h2>
      <ExEdTimeline />
    </section>
  );
}

export default EducationExperience;
