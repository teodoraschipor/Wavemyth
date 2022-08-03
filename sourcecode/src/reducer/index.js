import { combineReducers } from "redux";
import cartItems from './cartItems';
import numberCartItems from './numberCartItems';
import carouselItems from "./carouselItems";

export default combineReducers({
    numberCartItems, 
    cartItems,
    carouselItems,
});
