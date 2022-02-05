import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";

export const store = createStore(rootReducer, applyMiddleware(logger))
export const persist = persistStore(store);
