import FadeIn, { DIRECTION } from "./FadeIn";
import PATH from "../constants/PATH";
import "../styles/Title.scss";

function Title() {
  return (
    <a className="title-wrapper" href={PATH.HOME} target="_self">
      <FadeIn auto={true} direction={DIRECTION.LEFT}>
        <img alt="Logo" className="title-logo" src="/images/logo.png" />
      </FadeIn>

      <span className="title">
        <FadeIn auto={true} delay={1}>
          <span>JAEYONG CHO</span>
        </FadeIn>
        <FadeIn auto={true} delay={2}>
          <span>Front-end Developer</span>
        </FadeIn>
      </span>
    </a>
  );
}

export default Title;
