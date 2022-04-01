import { combineReducers, createStore } from "redux";
import successReducer from "./reducers/successReducer";

const rootReducer = combineReducers({
   successReducer,
});

export default createStore(rootReducer);
