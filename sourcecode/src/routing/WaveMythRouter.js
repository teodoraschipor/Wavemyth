import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Destinations from "../pages/Destinations/Destinations";
import Spaceships from "../pages/Spaceships/Spaceships";
import Cart from "../pages/Cart/Cart";

const WaveMythRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                {/* default redirection to destinations page */}
                <Route exact path="/" element={<Navigate to="/destinations" />} />
                <Route path="/home" element={<Layout> <Home /> </Layout>} />
                <Route path="/destinations" element={<Layout> <Destinations /> </Layout>} />
                <Route path="/spaceships" element={<Layout> <Spaceships /> </Layout>} />
                <Route path="/cart" element={<Layout> <Cart /> </Layout>} />

                {/* default redirection to destinations page if route doesn't exist */}
                <Route path="*" element={<Navigate to="/destinations" />
                }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default WaveMythRouter;