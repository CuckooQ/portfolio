import BusinessCard from "./BusinessCard";
import "../styles/Contact.scss";

function Contact() {
  return (
    <section className="contact-wrapper" id="contact">
      <h1 className="title">CONTACT</h1>
      <div className="contents">
        <BusinessCard />
      </div>
    </section>
  );
}

export default Contact;
