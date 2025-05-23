import "../styles/About.css";

function About({ refCallback }) {
  return (
    <section
      className="about-container main-section"
      id="about"
      ref={refCallback}
    >
      <div>
        <h1>Maryia Marozava</h1>
        <p>
          I am a critical thinker seeking to solve puzzles for a living.
          Combining my coding skills acquired through a full-time software
          development bootcamp and self-learning with attention to detail and
          ability to translate complex concepts into usable solutions, developed
          in previous roles, I am seeking a position to apply myself to
          real-life projects.
        </p>
      </div>
      <img src={null} alt="photo" />
    </section>
  );
}

export default About;
