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
    { id: "#home", text: "HOME" },
    { id: "#about", text: "ABOUT ME" },
    { id: "#projects", text: "PROJECTS" },
    { id: "#contact", text: "CONTACT" },
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
