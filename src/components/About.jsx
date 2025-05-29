import "../styles/About.css";

function About({ refCallback }) {
  return (
    <section className="main-section" id="about" ref={refCallback}>
      <h1>About</h1>
      <div className="about-container">
        <div className="about-text box-shadow">
          <h2>Maryia Marozava</h2>
          <p>
            <b>Critical thinker and problem solver.</b> Grounded in coding
            fundamentals from self-study, my learning has recently accelerated
            through a full-time software development bootcamp. Drawing upon
            meticulous attention to detail and sense of ownership developed
            through previous roles, my next step is seeking a role as a{" "}
            <b>Junior Software Developer</b>.
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
