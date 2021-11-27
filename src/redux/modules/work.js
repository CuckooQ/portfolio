import works from "../../constants/works.js";

// ACTION TYPE
const MOVE_PAGE = "work/MOVE_PAGE";

// ACTION CREATOR
export function movePage(page) {
  return { type: MOVE_PAGE, page };
}

// REDUCER
const initState = {
  works,
  page: 1,
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case MOVE_PAGE: {
      const newState = { ...prevState };

      const worksCnt = newState.works.length;
      let nextPage = action.page;
      if (action.page > worksCnt) {
        nextPage = 1;
      }
      if (action.page < 1) {
        nextPage = worksCnt;
      }
      newState.page = nextPage;

      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
