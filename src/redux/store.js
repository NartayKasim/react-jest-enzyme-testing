import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import successReducer from "./reducers/successReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
   success: successReducer,
});

export default createStore(
   rootReducer,
   composeEnhancer(applyMiddleware(thunk))
);
