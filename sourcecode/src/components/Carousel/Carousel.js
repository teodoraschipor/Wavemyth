import "./Carousel.scss";
import { useState } from "react";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import changeCartItems from "../../actionCreators/changeCartItems";
import changeNumberCartItems from "../../actionCreators/changeNumberCartItems";

const Carousel = () => {

    const cartItems = useSelector((state) => state.cartItems);
    const numberCartItems = useSelector((state) => state.numberCartItems);
    const carouselItems = useSelector((state) => state.carouselItems);
    const dispatch = useDispatch();    
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * function that adds the purchased element in the cart
     * @param {string} idPurchased - the id of the purchased element
     */
    const purchaseItem = (idPurchased) => {

        let aux = cartItems;
        if(aux[idPurchased]) {
            aux[idPurchased]++;
        } else {
            aux[idPurchased] = 1;
        }
        let x = numberCartItems + 1;
        dispatch(changeCartItems(aux));
        dispatch(changeNumberCartItems(x));
    }

    /**
     * function for carousel sliding when clicking the left arrow
     */
    const clickLeft = () => {
        if(currentIndex === 0) {
            return setCurrentIndex(carouselItems.length - 1);
        }
        return setCurrentIndex(currentIndex - 1);
    }

    /**
     * function for carousel sliding when clicking the right arrow
     */
    const clickRight = () => {
        if(currentIndex === carouselItems.length - 1) {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex + 1);
    }
    
    return (
        <div className="carousel">

            <img className="carousel__arrow" src={arrowleft} alt="arrow" onClick={clickLeft}/>

            {carouselItems.map((item, index) => {
                return <div className="carousel__item" style={{transform: `translate(-${currentIndex * 100}%)`}} key={index}>
                        <div className="carousel__item__photo">
                            <img src={`${process.env.PUBLIC_URL}/${item.imageSrc}`} alt={item.title} />
                            <div className="carousel__item__photo__details">
                                <p>{item.title}</p>
                                <p>{item.place}</p>
                                <p>Distance: {item.distance}</p>
                                <p>AUPopulation: {item.auPopulation}</p>
                            </div>
                        </div>
                        <div className="carousel__item__description">
                            <div className="carousel__item__description__text">
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                            <div className="carousel__item__description__price-container">
                                <div>
                                    <p>{item.price}</p>
                                    <p>one way ticket</p>
                                </div>
                                <button className="green-button" onClick={() => purchaseItem(item.id)}>Purchase</button>
                            </div>
                        </div>
                    </div>
            })}

            <img className="carousel__arrow" src={arrowright} alt="arrow" onClick={clickRight}/>
        </div>
    );
}

export default Carousel;