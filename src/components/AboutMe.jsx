import Card from "./Card";
import Rotate from "./Rotate";
import "../styles/AboutMe.scss";

function AboutMe(props) {
  const { educations, certificates, aboutContent, skills } = props;

  return (
    <section className="about-me-wrapper" id="about">
      <h1 className="title">ABOUT ME</h1>
      <div className="contents">
        <div className="skills-wrapper">
          <Rotate className="skills-scene" words={skills} />
        </div>
        <span className="content">{aboutContent}</span>
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
    </section>
  );
}

export default AboutMe;
