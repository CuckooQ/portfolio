import { useSelector } from "react-redux";
import AboutMe from "../components/AboutMe";

function AboutMeContainer() {
  const { aboutContent, educations, certificates } = useSelector(
    (state) => state.about
  );
  return (
    <AboutMe
      aboutContent={aboutContent}
      educations={educations}
      certificates={certificates}
    />
  );
}

export default AboutMeContainer;
