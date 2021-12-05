import MenuContainer from "../../containers/MenuContainer";
import Github from "../Github";
import Title from "../Title";
import PATH from "../../constants/PATH";
import "../../styles/Header.scss";

function Header() {
  return (
    <header id={PATH.INNER.HOME}>
      <MenuContainer />
      <Title />
      <Github />
    </header>
  );
}

export default Header;
