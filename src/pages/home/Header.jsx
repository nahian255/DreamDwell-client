import image from "../../assets/hero-image.png"

const Header = () => {
    return (
        <div className="flex px-28 align-baseline max-h-screen p">
            <div className="w-1/2 py-10 relative">
                <h1 className="text-6xl font-bold py-8">Discover <br /> Most Suitable Property</h1>
                <p className="text-xl py-10">Find a variety of properties that suit you very easiltyForget all difficulties in finding a residence for you
                </p>
                <div className="py-8"> serch bar</div>
                <div> mini type</div>
                {/* <div className="bg-gray-200 w-32 h-32 -top-12"></div> */}
            </div>
            <div className="align-middle  p-24 ">
                <img className="rounded-t-full" height={300} width={400} src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;