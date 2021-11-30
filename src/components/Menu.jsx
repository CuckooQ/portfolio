import ModalPortals from "./ModalPortals";
import "../styles/Menu.scss";

function Menu(props) {
  const { menuList, isOpen, toggleMenu } = props;

  return (
    <div className="menu-wrapper">
      <div
        className={`menu-icon ${isOpen && "close"}`}
        onClick={() => toggleMenu()}
      ></div>
      <div className={`menu ${isOpen && "show"}`}>
        <ul>
          {menuList.map((menu) => {
            return (
              <li key={menu.id}>
                <a href={menu.id} onClick={() => toggleMenu()}>
                  {menu.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <ModalPortals>
        <div
          className={`background ${isOpen && "show"}`}
          onClick={() => toggleMenu()}
        ></div>
      </ModalPortals>
    </div>
  );
}

export default Menu;
