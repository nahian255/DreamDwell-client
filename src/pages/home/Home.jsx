import Contact from "./Contact";
import GetStart from "./GetStart";
import Header from "./Header";
import OurValue from "./OurValue";
import PopularResidencies from "./PopularResidencies";

const Home = () => {
    return (
        <div>
            <div className="text-white bg-[#23201f]">
                <Header />
            </div>
            <PopularResidencies />
            <OurValue />
            <Contact />
            <GetStart />
        </div>
    );
};

export default Home;