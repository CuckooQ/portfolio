import BusinessCard from "../BusinessCard";
import SectionWrapper from "../SectionWrapper";
import PATH from "../../constants/PATH";
import "../../styles/Contact.scss";

function Contact() {
  return (
    <SectionWrapper
      className="contact-wrapper"
      title="CONTACT"
      reverse={true}
      id={PATH.INNER.CONTACT}
    >
      <div className="contents">
        <BusinessCard />
      </div>
    </SectionWrapper>
  );
}

export default Contact;
