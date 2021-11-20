import "../styles/AboutMe.scss";

function AboutMe() {
  return (
    <section className="about-me-wrapper" id="about">
      <h1 className="title">ABOUT ME</h1>
      <div className="contents">
        <img
          className="content-image"
          src="/images/logo.png"
          alt="Jaeyong Cho"
        />
        <span className="content">
          {`꾸준한 성장을 모토로\n새로운 도전을 두려워하지 않고 배움을 멈추지 않습니다.\n\n2018년 풀스택 개발자로 시작해서\n2021년 현재 프론트엔드 개발자로서 나아가고자 합니다.\n\n3년간 일본에서 풀스택 개발자로서의 경험에서 배운\n개발 지식과 책임감, 그리고 협력을 기반으로 삼아 웹 애플리케이션을 개발합니다.`}
        </span>
      </div>
    </section>
  );
}

export default AboutMe;
