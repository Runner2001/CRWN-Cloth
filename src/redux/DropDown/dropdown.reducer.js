import { Dropdown } from "./dropdown.type"
import { addItemCart, removeItem } from "./dropdown.utils"

const initialState = {
    hidden: true,
    cartItems: []
}

export const dropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case Dropdown.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case Dropdown.ADD_ITEMS:
            return {
                ...state,
                cartItems: addItemCart(state.cartItems, action.payload)
            }
        case Dropdown.DELETE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        case Dropdown.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)
            }
        default: return state
    }
}