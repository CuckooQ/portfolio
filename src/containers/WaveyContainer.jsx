import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { updateFontFigure } from "../redux/modules/wavey";
import Wavey from "../components/Wavey";

function WaveyContainer() {
  const { figure } = useSelector((state) => state.wavey);

  const dispatch = useDispatch();
  const updateFigure = useCallback(
    (figure) => {
      dispatch(updateFontFigure(figure));
    },
    [dispatch]
  );

  return <Wavey figure={figure} updateFigure={updateFigure} />;
}

export default WaveyContainer;
