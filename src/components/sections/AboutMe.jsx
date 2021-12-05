import Card from "../Card";
import Rotate from "../Rotate";
import SectionWrapper from "../SectionWrapper";
import PATH from "../../constants/PATH";
import "../../styles/AboutMe.scss";

function AboutMe(props) {
  const { aboutContent, certificates, educations, skills } = props;

  return (
    <SectionWrapper
      className="about-me-wrapper"
      title="ABOUT ME"
      id={PATH.INNER.ABOUT}
    >
      <div className="contents">
        <span className="content">{aboutContent}</span>
        <div className="skills-wrapper">
          <Rotate className="skills-scene" words={skills} />
        </div>
      </div>
      <div className="sub-contents">
        <div className="content">
          <h2>Education</h2>
          {educations &&
            educations.map(({ text, tooltips }, idx) => {
              return (
                <Card key={idx} tooltips={tooltips}>
                  {text}
                </Card>
              );
            })}
        </div>
        <div className="content">
          <h2>Certificate</h2>
          {certificates &&
            certificates.map(({ text }, idx) => {
              return <Card key={idx}>{text}</Card>;
            })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutMe;
