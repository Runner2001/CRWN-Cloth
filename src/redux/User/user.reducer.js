import { UserActionType } from "./user.type";

const initialState = {
    currentUser: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case UserActionType.SIGNIN_SUCCESS:
        case UserActionType.EMAIL_SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            };
        case UserActionType.SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case UserActionType.SIGNIN_FAILURE:
        case UserActionType.SIGNOUT_FAILURE:
        case UserActionType.SIGNUP_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default: return state;
    }
}

export default userReducer;