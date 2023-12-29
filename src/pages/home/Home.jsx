import Header from "./Header";
import PopularResidencies from "./PopularResidencies";

const Home = () => {
    return (
        <div>
            <div className="text-white bg-[#23201f]">
                <Header />
            </div>
            <PopularResidencies />
        </div>
    );
};

export default Home;