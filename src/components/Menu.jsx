import ModalPortals from "./ModalPortals";
import "../styles/Menu.scss";

function Menu(props) {
  const { isOpen, menuList, toggleMenu } = props;

  const menuIconClassName = `menu-icon ${isOpen ? "close" : ""}`;
  const menuClassName = `menu ${isOpen ? "show" : ""}`;
  const modalClassName = `background ${isOpen ? "show" : ""}`;

  return (
    <div className="menu-wrapper">
      <div className={menuIconClassName} onClick={toggleMenu}></div>
      <div className={menuClassName}>
        <ul>
          {menuList.map(({ id, text }) => {
            return (
              <li key={id} onClick={toggleMenu}>
                <a href={`#${id}`}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <ModalPortals>
        <div className={modalClassName} onClick={toggleMenu}></div>
      </ModalPortals>
    </div>
  );
}

export default Menu;
