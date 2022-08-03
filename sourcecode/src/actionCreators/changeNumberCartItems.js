
export default function changeNumberCartItems (numberCartItems) {
    return ({
        type: "CHANGE_NUMBER_CART_ITEMS",
        payload: numberCartItems
    });
}