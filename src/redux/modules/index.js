import { combineReducers } from "redux";
import menu from "./menu";
import about from "./about";

const reducer = combineReducers({ menu, about });

export default reducer;
