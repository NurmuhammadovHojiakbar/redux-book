import { applyMiddleware, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(rootReducer,devToolsEnhancer(applyMiddleware(logger)));

export default store;