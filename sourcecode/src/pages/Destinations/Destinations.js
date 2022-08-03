import "./Destinations.scss"
import Carousel from "../../components/Carousel/Carousel";
import { useDispatch } from "react-redux";
import changeCartItems from "../../actionCreators/changeCartItems";
import changeNumberCartItems from "../../actionCreators/changeNumberCartItems";
import pack from "../../assets/pack.svg";
import fly from "../../assets/fly.svg";
import live from "../../assets/live.svg";
import arrow from "../../assets/arrow-right.svg";

const Destinations = () => {

    const dispatch = useDispatch();

    /**
     * function that resets the cart
     */
    const checkOut = () => {
       dispatch(changeCartItems({}));
       dispatch(changeNumberCartItems(0));
    }

    return (
        <div className="destinations-page">

            <Carousel />

            <div className="destinations-page__steps">
                <div className="section">
                    <img src={pack} alt="pack" />
                    <p>pack</p>
                </div>
                <img className="section"src={arrow} alt="arrow" />
                <div className="section">
                    <img src={fly} alt="fly" />
                    <p>fly</p>
                </div>
                <img className="section"src={arrow} alt="arrow" />
                <div className="section">
                    <img src={live} alt="live" />
                    <p>live</p>
                </div>
                <img className="section"src={arrow} alt="arrow" />
                <div className="section">
                    <p>ENJOY</p>
                    <p>A NEW WORLD!</p>
                </div>
            </div>

            <div className="destinations-page__details">
                <p className="destinations-page__details__title">PFL package</p>
                <hr />
                <p className="destinations-page__details__text">
                    Out pack fly live package includes lpsum dolor sit amet, consectetur adipiscing elit. Vivamus ex ante, tristique sed elit id, scelerisque scelerisque risus. Nulla malesuada suscipit vehicula. Vestibulum mauris purus, malesuada eget laoreet et, mattis eu purus. Sed arcu enim, rhoncus non porta eu, finibus sed erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vitae nisi vel ornare. Cras velit neque, tincidunt et purus eu, semper dignissim risus. Quisque gravida interdum ipsum ac dignissim. Aenean fringilla libero leo, vitae varius magna convallis vel. Morbi luctus ligula erat, vitae pulvinar nunc pretium nec. Integer id facilisis nibh. In porta at tellus eget consectetur. Vestibulum nisl nunc, euismod a aliquet sit amet, fermentum in massa.
                    <br /><br />
                    Nunc quis eros facilisis, sagittis ex vitae, mattis sapien. Duis feugiat dictum vehicula. Nullam vestibulum tellus nisi, eu euismod velit finibus et. Aliquam id risus non sem pulvinar pulvinar in quis tellus. Pellentesque eget ipsum dignissim, molestie est vitae, tincidunt elit. Pellentesque suscipit, magna ac molestie luctus, magna massa placerat purus, in dictum urna dui vel massa. Curabitur eget est felis. Morbi eleifend libero a turpis sollicitudin aliquet.
                    <br /><br />
                    Aliquam id risus non sem pulvinar pulvinar in quis tellus. Pellentesque eget ipsum dignissim, molestie est vitae, tincidunt elit. Pellentesque suscipit, magna ac molestie luctus, magna massa placerat purus, in dictum urna dui vel massa. Curabitur eget est felis. Morbi eleifend libero a turpis sollicitudin aliquet. 
                </p>
            </div>

            <button className="green-button" onClick={checkOut}> Checkout </button>
        </div>
    );
}

export default Destinations;