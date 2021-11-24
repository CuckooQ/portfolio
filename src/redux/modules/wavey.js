// ACTION TYPE
const UPDATE_FONT_FIGURE = "wavey/UPDATE_FONT_FIGURE";

// ACTION CREATOR
export function updateFontFigure(figure) {
  return { type: UPDATE_FONT_FIGURE, figure };
}

// REDUCER
const initState = {
  figure: 0.5,
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case UPDATE_FONT_FIGURE: {
      const newState = { ...prevState };
      newState.figure = action.figure;
      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
