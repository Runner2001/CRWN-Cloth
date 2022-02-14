import { shopActionType } from "./shop.type";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionType.FATCH_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case shopActionType.FATCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case shopActionType.FATCH_DATA_FAIL:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: return state;
    }
}