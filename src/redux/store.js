import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleWare.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare))

sagaMiddleware.run(rootSaga)

export const persist = persistStore(store);

export default { store, persistStore }
