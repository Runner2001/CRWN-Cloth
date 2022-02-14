import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk';

const middleWare = [thunk];

if (process.env.NODE_ENV === 'development') {
    middleWare.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare))
export const persist = persistStore(store);
