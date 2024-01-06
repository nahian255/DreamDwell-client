import Contact from "./Contact";
import GetStart from "./GetStart";
import Header from "./Header";
import OurValue from "./OurValue";
import PopularResidencies from "./PopularResidencies";

const Home = () => {
    return (
        <div >
            <div className="text-white bg-[#131110]">
                <Header />
            </div>
            <div className="px-20">
                <PopularResidencies />
                <OurValue />
                <Contact />
                <GetStart />
            </div>
        </div>
    );
};

export default Home;