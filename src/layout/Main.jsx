import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-">
                <Outlet />
                <Footer />
            </div>

        </div>
    );
};

export default Main;