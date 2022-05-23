import { all, call } from "redux-saga/effects";
import { fetchingCollectionStart } from "./shop/shop.saga";


export default function* rootSaga() {
    yield all([
        call(fetchingCollectionStart)
    ])
}