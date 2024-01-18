import { useEffect } from "react";
import Contact from "./Contact";
import GetStart from "./GetStart";
import Header from "./Header";
import OurValue from "./OurValue";
import PopularResidencies from "./PopularResidencies";

const Home = () => {
    // page loding in the top
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(5, 2);
    }, []);

    return (
        <div >
            <div className="text-white bg-[#131110]">
                <Header />
            </div>
            <div className="px-5 md:px-10 lg:px-20">
                <PopularResidencies />
                <OurValue />
                <Contact />
                <GetStart />
            </div>
        </div>
    );
};

export default Home;