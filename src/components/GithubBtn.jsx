import URL from "../constants/URL";
import "../styles/GithubBtn.scss";

function GithubBtn() {
  return (
    <a
      className="github-btn"
      href={URL.GITHUB}
      target="_blank"
      rel="noreferrer"
    >
      <img src="/images/github.png" alt="Github" />
    </a>
  );
}

export default GithubBtn;
