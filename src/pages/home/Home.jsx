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
        </div>
    );
};

export default Home;