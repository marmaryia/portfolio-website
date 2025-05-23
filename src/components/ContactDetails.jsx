import "../styles/ContactDetails.css";

function ContactDetails({ refCallback }) {
  return (
    <section id="contact-details" ref={refCallback} className="main-section">
      <h2>Contact Details</h2>

      <div className="contacts-container">
        <img src="contacts-img.JPG" alt="photo" className="profile-img" />
        <ul className="contacts-list">
          <li className="email-container">
            <a href="marozavamaryia@gmail.com">marozavamaryia@gmail.com</a>

            <button
              onClick={() => {
                navigator.clipboard.writeText("marozavamaryia@gmail.com");
              }}
            >
              Copy
            </button>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/maryia-m-7a26b022a/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/marmaryia">GitHub</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactDetails;
