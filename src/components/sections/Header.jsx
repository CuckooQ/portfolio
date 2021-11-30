import "../../styles/Header.scss";
import MenuContainer from "../../containers/MenuContainer";
import Title from "../Title";
import Github from "../Github";

function Header() {
  return (
    <header id="home">
      <MenuContainer />
      <Title />
      <Github />
    </header>
  );
}

export default Header;
