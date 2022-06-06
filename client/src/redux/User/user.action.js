import { UserActionType } from "./user.type";


export const googleSignInStart = () => ({
    type: UserActionType.GOOGLE_SIGNIN_START
})

export const signInSuccess = (user) => ({
    type: UserActionType.SIGNIN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: UserActionType.SIGNIN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionType.EMAIL_SIGNIN_START,
    payload: emailAndPassword
})

export const checkUserSession = () => ({
    type: UserActionType.CHECK_USER_SESSION,
})

export const signOutStart = () => ({
    type: UserActionType.SIGNOUT_START
})

export const signOutSuccess = () => ({
    type: UserActionType.SIGNOUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionType.SIGNOUT_FAILURE,
    payload: error
})

export const signUpStart = (userCredentials) => ({
    type: UserActionType.SIGNUP_START,
    payload: userCredentials
})

export const singUpSuccess = ({ user, additionalData }) => ({
    type: UserActionType.SIGNUP_SUCCESS,
    payload: { user, additionalData }
})

export const signUpFailure = (error) => ({
    type: UserActionType.SIGNUP_FAILURE,
    payload: error
})