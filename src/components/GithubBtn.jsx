import URL from "../constants/URL";
import "../styles/GithubBtn.scss";

function GithubBtn() {
  return (
    <a
      className="github-btn"
      href={URL.GITHUB}
      rel="noreferrer"
      target="_blank"
    >
      <img alt="Github" src="/images/github.png" />
    </a>
  );
}

export default GithubBtn;
