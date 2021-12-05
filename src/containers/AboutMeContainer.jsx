import { useSelector } from "react-redux";
import AboutMe from "../components/sections/AboutMe";

function AboutMeContainer() {
  const { aboutContent, educations, certificates, skills } = useSelector(
    (state) => state.about
  );
  return (
    <AboutMe
      aboutContent={aboutContent}
      educations={educations}
      certificates={certificates}
      skills={skills}
    />
  );
}

export default AboutMeContainer;
