import "../styles/ContactDetails.css";

function ContactDetails() {
  return (
    <section id="contact-details">
      <h2>Contact Details</h2>
      <ul className="contacts-container">
        <li className="email-container">
          <p>marozavamaryia@gmail.com</p>
          <button
            onClick={() => {
              navigator.clipboard.writeText("marozavamaryia@gmail.com");
            }}
          >
            Copy
          </button>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/maryia-m-7a26b022a/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/marmaryia">GitHub</a>
        </li>
      </ul>
    </section>
  );
}

export default ContactDetails;
