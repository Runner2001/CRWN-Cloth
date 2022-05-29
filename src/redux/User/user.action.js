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