import { collection, getDocs } from 'firebase/firestore';
import { call, put, takeLatest } from 'redux-saga/effects';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { fetchingFail, fetchingSuccess } from './shop.action';
import { shopActionType } from './shop.type';

export function* fetchingCollectionAsync() {
    try {
        const collectionsRef = collection(firestore, "collections");
        const snapshot = yield getDocs(collectionsRef);
        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchingSuccess(collectionMap));
    } catch (error) {
        yield put(fetchingFail(error.message))
    }
}

export function* fetchingCollectionStart() {
    yield takeLatest(shopActionType.FATCH_DATA_START, fetchingCollectionAsync)
}
