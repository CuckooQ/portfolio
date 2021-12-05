import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu as toggleSideMenu } from "../redux/modules/menu";
import Menu from "../components/Menu";

function MenuContainer() {
  const { isOpen, menuList } = useSelector((state) => state.menu);

  const dispatch = useDispatch();
  const toggleMenu = useCallback(() => {
    dispatch(toggleSideMenu());
  }, [dispatch]);

  return <Menu menuList={menuList} isOpen={isOpen} toggleMenu={toggleMenu} />;
}

export default MenuContainer;
