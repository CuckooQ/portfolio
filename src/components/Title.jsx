import FadeIn, { DIRECTION } from "./FadeIn";
import PATH from "../constants/PATH";
import "../styles/Title.scss";

function Title() {
  return (
    <a className="title-wrapper" href={PATH.HOME} target="_self">
      <FadeIn direction={DIRECTION.LEFT} auto={true}>
        <img className="title-logo" src="/images/logo.png" alt="Logo" />
      </FadeIn>

      <span className="title">
        <FadeIn delay={1} auto={true}>
          <span>JAEYONG CHO</span>
        </FadeIn>
        <FadeIn delay={2} auto={true}>
          <span>Front-end Developer</span>
        </FadeIn>
      </span>
    </a>
  );
}

export default Title;
