import "../styles/Title.scss";

function Title() {
  return (
    <a className="title-wrapper" href="/" target="_self">
      <img className="title-logo" src="/images/logo.png" alt="Logo" />
      <span className="title">
        <div>Jaeyong Cho</div>
        <div>Front-end Developer</div>
      </span>
    </a>
  );
}

export default Title;
