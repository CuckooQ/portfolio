import AboutMeContainer from "../../containers/AboutMeContainer";
import WorkContainer from "../../containers/WorkContainer";
import Contact from "./Contact";
import FadeIn from "../FadeIn";
import Visual from "./Visual";

function Main() {
  return (
    <main>
      <FadeIn delay={3} auto={true}>
        <Visual />
      </FadeIn>
      <FadeIn>
        <AboutMeContainer />
      </FadeIn>
      <FadeIn>
        <WorkContainer />
      </FadeIn>
      <Contact />
    </main>
  );
}

export default Main;
