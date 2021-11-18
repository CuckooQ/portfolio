import reducer from "./modules/index";
import { createStore } from "redux";

const store = createStore(reducer);

export default store;
