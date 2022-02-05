export const addItemCart = (cartItems, cardItemToAdd) => {
    const exisitingCartItem = cartItems.find(cartitem =>
        cartitem.id === cardItemToAdd.id
    );

    if (exisitingCartItem) {
        return cartItems.map(eachitem =>
            eachitem.id === cardItemToAdd.id
                ? { ...eachitem, quantity: eachitem.quantity + 1 }
                : eachitem
        );
    }

    return [...cartItems, { ...cardItemToAdd, quantity: 1 }]
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const exisitingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if (exisitingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id ?
            { ...item, quantity: item.quantity - 1 }
            : item)

}