export default function changeCartItems(cartItems) {
    return {
        type: "CHANGE_CART_ITEMS",
        payload: cartItems
    }; 
}