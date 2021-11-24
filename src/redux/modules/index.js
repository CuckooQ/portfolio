import { combineReducers } from "redux";
import menu from "./menu";
import about from "./about";
import wavey from "./wavey";

const reducer = combineReducers({ menu, about, wavey });

export default reducer;
