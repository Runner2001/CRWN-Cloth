import { shopActionType } from "./shop.type";

const INITIAL_STATE = {
    collections: null
}

export const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionType.UPADATE_COLLECTION:
            return {
                ...state,
                collections: action.payload
            }

        default: return state;
    }
}