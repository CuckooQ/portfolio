import PATH from "../../constants/PATH";

// ACTION TYPE
const TOGGLE_MENU = "menu/TOGGLE_MENU";

// ACTION CREATOR
export function toggleMenu() {
  return { type: TOGGLE_MENU };
}

// REDUCER
const initState = {
  isOpen: false,
  menuList: [
    { id: `${PATH.INNER.HOME}`, text: "HOME" },
    { id: `${PATH.INNER.ABOUT}`, text: "ABOUT ME" },
    { id: `${PATH.INNER.WORK}`, text: "WORK" },
    { id: `${PATH.INNER.CONTACT}`, text: "CONTACT" },
  ],
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      const newState = { ...prevState };
      newState.isOpen = !prevState.isOpen;
      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
