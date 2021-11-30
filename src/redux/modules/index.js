import { combineReducers } from "redux";
import menu from "./menu";
import about from "./about";
import work from "./work";

const reducer = combineReducers({ menu, about, work });

export default reducer;
