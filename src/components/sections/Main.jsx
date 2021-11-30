// import WaveyContainer from "../../containers/WaveyContainer";
import AboutMeContainer from "../../containers/AboutMeContainer";
import WorkContainer from "../../containers/WorkContainer";
import Visual from "../Visual";
import Contact from "../Contact";
import FadeIn from "../FadeIn";
function Main() {
  return (
    <main>
      <FadeIn direction={"right"} delay={3} auto={true}>
        <Visual />
      </FadeIn>
      <FadeIn direction={"right"}>
        <AboutMeContainer />
      </FadeIn>
      <FadeIn direction={"right"}>
        <WorkContainer />
      </FadeIn>
      <Contact />
    </main>
  );
}

export default Main;
