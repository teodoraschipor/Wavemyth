import "./Header.scss";
import home from "../../assets/home.svg";
import destinations from "../../assets/destinations.svg";
import spaceships from "../../assets/spaceships.svg";
import cart from "../../assets/cart.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const numberCartItems = useSelector((state) => state.numberCartItems);

    return (
        <nav className="header">
            <div className="header__section">
                <p className="header__section__title">COSMOS</p>
                <Link to="/home"  className="header__section__item" ><img src={home} alt="Home" /> <p>Home</p></Link>
                <Link to="/destinations"  className="header__section__item" ><img src={destinations} alt="Destinations" /> <p>Destinations</p></Link>
                <Link to="/spaceships"  className="header__section__item" ><img src={spaceships} alt="Spaceships" /> <p>Spaceships</p></Link>
            </div>

            <div className="header__section">
                <Link to="/cart"  className="header__section__item" ><img src={cart} alt="Cart" /> <p>{numberCartItems}</p> </Link>
            </div>
        </nav>
    );
}

export default Header;