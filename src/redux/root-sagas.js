import { all, call } from "redux-saga/effects";
import { fetchingCollectionStart } from "./shop/shop.saga";
import { userSagas } from "./User/user.sagas";


export default function* rootSaga() {
    yield all([
        call(fetchingCollectionStart),
        call(userSagas)
    ])
}