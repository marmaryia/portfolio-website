import "../styles/ContactDetails.css";

function ContactDetails({ refCallback }) {
  return (
    <section id="contact-details" ref={refCallback} className="main-section">
      <h1>Contact</h1>

      <div className="contacts-container">
        <img
          src="contacts-img-sq.JPG"
          alt="photo"
          className="contact-img box-shadow"
        />
        <ul className="contacts-list">
          <div className="contact-details-link">
            <li className="email-container">
              <a href="marozavamaryia@gmail.com">marozavamaryia@gmail.com</a>

              <button
                className="contact-details-button"
                onClick={() => {
                  navigator.clipboard.writeText("marozavamaryia@gmail.com");
                }}
              >
                <img src="icons/copy.svg" width="20em"></img>
              </button>
            </li>
          </div>
          <div className="contact-details-link">
            <li>
              <a href="https://www.linkedin.com/in/maryia-m-7a26b022a/">
                LinkedIn
              </a>
            </li>
          </div>
          <div className="contact-details-link">
            <li>
              <a href="https://github.com/marmaryia">GitHub</a>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default ContactDetails;
