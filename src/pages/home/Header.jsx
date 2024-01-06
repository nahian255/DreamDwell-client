import image from "../../assets/hero-image.png"

const Header = () => {
    return (
        <div className="flex px-28 align-baseline font-sans">
            <div className="w-1/2 py-10 relative">
                <h1 className="text-6xl font-sans font-bold py-8">Discover <br /> Most Suitable Property</h1>
                <p className="text-xl text-[#d1caca] py-10 font-sans">Find a variety of properties that suit you very easiltyForget all difficulties in finding a residence for you
                </p>
                {/* <div className="py-8"> serch bar</div> */}
                <div className="flex gap-6">
                    <div>
                        <p className="text-5xl">9,000<span className="text-orange-500"> +</span></p>
                        <h1 className="text-[#8c8b8b] ">Premium Product</h1>
                    </div>
                    <div>
                        <p className="text-5xl">9,000<span className="text-orange-500"> +</span></p>
                        <h1 className="text-[#8c8b8b] ">Happy Customer</h1>
                    </div>
                    <div>
                        <p className="text-5xl">28<span className="text-orange-500"> +</span></p>
                        <h1 className="text-[#8c8b8b] ">Awards Winning</h1>
                    </div>
                </div>
                {/* <div className="bg-gray-200 w-32 h-32 -top-12"></div> */}
            </div>
            <div className="align-middle  p-10 ">
                <img className="rounded-t-full border-4 border-gray-600" height={300} width={400} src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;