import BusinessCard from "../BusinessCard";
import SectionWrapper from "../SectionWrapper";
import PATH from "../../constants/PATH";
import "../../styles/Contact.scss";

function Contact() {
  return (
    <SectionWrapper
      className="contact-wrapper"
      id={PATH.INNER.CONTACT}
      reverse={true}
      title="CONTACT"
    >
      <div className="contents">
        <BusinessCard />
      </div>
    </SectionWrapper>
  );
}

export default Contact;
