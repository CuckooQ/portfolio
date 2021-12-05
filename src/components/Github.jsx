import GithubBtn from "./GithubBtn";
import FadeIn from "./FadeIn";
import "../styles/Github.scss";

function Github() {
  return (
    <div className="github-wrapper">
      <FadeIn delay={3} auto={true}>
        <GithubBtn />
      </FadeIn>
    </div>
  );
}

export default Github;
