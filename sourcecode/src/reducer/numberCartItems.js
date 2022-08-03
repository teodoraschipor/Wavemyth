export default function numberCartItems(state = 0, action) {
    switch (action.type) {
        case "CHANGE_NUMBER_CART_ITEMS":
            return action.payload;
        default:
            return state;
    }
}