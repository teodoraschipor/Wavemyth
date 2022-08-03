import "./Cart.scss";
import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems);
    const numberCartItems = useSelector((state) => state.numberCartItems);
    const carouselItems = useSelector((state) => state.carouselItems);

    /**
     * function that displays the items in the cart if it's not empty
     */
    const displayCart = () => {

        let toDisplay = [];
        for (const key in cartItems) {
            toDisplay.push(carouselItems.find(item => key === item.id));
        }
        return toDisplay.map((item) =>  
            <div>
                <p>{item.title}</p>
                <p>Quantity: {cartItems[item.id]}</p>
                <p>Price: {parseFloat(cartItems[item.id]) * parseFloat(item.price)} €</p>
                <br />
            </div>
        )
    }


    return (
        <div className="cart-page">
            {numberCartItems ? displayCart() : <p>YOUR CART IS EMPTY :)</p>}
        </div>
    );
}

export default Cart;