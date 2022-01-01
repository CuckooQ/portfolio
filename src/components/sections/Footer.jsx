import "../../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="left">Portfolio &copy; {new Date().getFullYear()}</div>
      <div className="line"></div>
      <div className="right">
        <span>Created by</span>
        <span>JAEYONG CHO</span>
      </div>
    </footer>
  );
}

export default Footer;
