import GithubBtn from "./GithubBtn";
import FadeIn from "./FadeIn";
import "../styles/Github.scss";

function Github() {
  return (
    <div className="github-wrapper">
      <FadeIn auto={true} delay={3}>
        <GithubBtn />
      </FadeIn>
    </div>
  );
}

export default Github;
