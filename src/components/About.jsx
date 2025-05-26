import "../styles/About.css";

function About({ refCallback }) {
  return (
    <section className="main-section" id="about" ref={refCallback}>
      <h1>About</h1>
      <div className="about-container">
        <div className="about-text box-shadow">
          <h2>Maryia Marozava</h2>
          <p>
            I am a critical thinker seeking to solve puzzles for a living.
            Combining my coding skills acquired through a full-time software
            development bootcamp and self-learning with attention to detail and
            ability to translate complex concepts into usable solutions,
            developed in previous roles, I am seeking a position to apply myself
            to real-life projects.
          </p>
        </div>
        <img
          src="profile-img.JPG"
          alt="photo"
          className="profile-img box-shadow"
        />
      </div>
    </section>
  );
}

export default About;
