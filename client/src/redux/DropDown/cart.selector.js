import { createSelector } from "reselect";

const selectCart = state => state.dropDown;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selecteCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity,
        0
    ),
)

export const selectTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
        0
    ),
)