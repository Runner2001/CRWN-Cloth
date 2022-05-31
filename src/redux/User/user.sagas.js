import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, singUpSuccess } from './user.action';
import { UserActionType } from './user.type';

export function* getSnapShotFromUser(user, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData)
        const userSnapShot = yield getDoc(userRef)
        yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield signInWithPopup(auth, googleProvider);
        yield getSnapShotFromUser(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password)
        yield getSnapShotFromUser(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUser(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signUp({ payload: { displayName, email, password } }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password)
        yield put(singUpSuccess({ user, additionalData: { displayName } }))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* signUpSuccessful({ payload: { user, additionalData } }) {
    yield getSnapShotFromUser(user, additionalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionType.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionType.EMAIL_SIGNIN_START, signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionType.SIGNOUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionType.SIGNUP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionType.SIGNUP_SUCCESS, signUpSuccessful)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}
