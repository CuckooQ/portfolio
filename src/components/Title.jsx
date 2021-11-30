import FadeIn from "./FadeIn";
import "../styles/Title.scss";

function Title() {
  return (
    <a className="title-wrapper" href="/" target="_self">
      <FadeIn direction={"left"} auto={true}>
        <img className="title-logo" src="/images/logo.png" alt="Logo" />
      </FadeIn>

      <span className="title">
        <FadeIn direction={"right"} delay={1} auto={true}>
          <span>JAEYONG CHO</span>
        </FadeIn>
        <FadeIn direction={"right"} delay={2} auto={true}>
          <span>Front-end Developer</span>
        </FadeIn>
      </span>
    </a>
  );
}

export default Title;
