import { useState } from "react";
import "../styles/ContactDetails.css";

function ContactDetails({ refCallback }) {
  const [copyClicked, setCopyClicked] = useState(false);

  function handleCopyClick() {
    navigator.clipboard.writeText("marozavamaryia@gmail.com");
    setCopyClicked((current) => !current);
  }

  return (
    <section id="contact-details" ref={refCallback} className="main-section">
      <h1>Contact</h1>

      <div className="contacts-container">
        <img
          src="contacts-img-sq.JPG"
          alt="photo"
          className="contact-img box-shadow"
        />
        <ul className="contacts-list box-shadow">
          <div className="contact-details-link">
            <li className="email-container">
              <p className="contacts-element">marozavamaryia@gmail.com</p>

              <button
                className="contact-details-button"
                onClick={handleCopyClick}
              >
                <img
                  src={copyClicked ? "icons/checkmark.svg" : "icons/copy.svg"}
                  width="20em"
                ></img>
              </button>
            </li>
          </div>
          <div className="contact-details-link">
            <li>
              <a
                className="contacts-element"
                href="https://www.linkedin.com/in/maryia-m-7a26b022a/"
              >
                LinkedIn
              </a>
            </li>
          </div>
          <div className="contact-details-link">
            <li>
              <a
                className="contacts-element"
                href="https://github.com/marmaryia"
              >
                GitHub
              </a>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default ContactDetails;
