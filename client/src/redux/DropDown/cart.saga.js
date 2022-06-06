import { all, call, put, takeLatest } from 'redux-saga/effects'
import { UserActionType } from '../User/user.type'
import { clearCart } from './dropdown.action'


export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSingOutSuccess() {
    yield takeLatest(UserActionType.SIGNOUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga() {
    yield (all([
        call(onSingOutSuccess)
    ]))
}