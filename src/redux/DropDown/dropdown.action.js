import { Dropdown } from "./dropdown.type"

export const DropDownAction = () => {
    return {
        type: Dropdown.TOGGLE_CART
    }
}

export const AddItems = item => {
    return {
        type: Dropdown.ADD_ITEMS,
        payload: item
    }
}

export const DeleteItem = item => {
    return {
        type: Dropdown.DELETE_ITEM,
        payload: item
    }
}

export const RemoveItem = item => {
    return {
        type: Dropdown.REMOVE_ITEM,
        payload: item
    }
}

export const clearCart = () => ({
    type: Dropdown.CLEAR_CART
})