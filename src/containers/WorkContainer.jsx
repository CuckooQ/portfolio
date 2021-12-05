import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movePage } from "../redux/modules/work";
import Work from "../components/sections/Work";

function WorkContainer() {
  const { works, page } = useSelector((state) => state.work);

  const dispatch = useDispatch();
  const setPage = useCallback(
    (page) => {
      dispatch(movePage(page));
    },
    [dispatch]
  );

  return <Work works={works} page={page} setPage={setPage} />;
}

export default WorkContainer;
