import "../styles/Title.scss";

function Title() {
  return (
    <a className="title-wrapper" href="/" target="_self">
      <img className="title-logo" src="/images/logo.png" alt="Logo" />
      <span className="title">
        <h2>Jaeyong Cho</h2>
        <h3>Front-end Developer</h3>
      </span>
    </a>
  );
}

export default Title;
