import "../../styles/Header.scss";
import MenuContainer from "../../containers/MenuContainer";
import Title from "../Title";
import GithubBtn from "../GithubBtn";

function Header() {
  return (
    <header>
      <MenuContainer />
      <Title />
      <GithubBtn />
    </header>
  );
}

export default Header;
