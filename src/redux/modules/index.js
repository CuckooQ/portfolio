import { combineReducers } from "redux";
import menu from "./menu";
import about from "./about";
import wavey from "./wavey";
import work from "./work";

const reducer = combineReducers({ menu, about, wavey, work });

export default reducer;
