export default function cartItems(state = {}, action) {
    switch (action.type) { 
        case "CHANGE_CART_ITEMS":
            return action.payload;
        default:
            return state;
    }
}

/**
 * Note: 
 * cartItems object will consist of: key = the id of the item, value = the added quantity of the item 
 */