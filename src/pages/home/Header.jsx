import { useEffect } from "react";
import image from "../../assets/hero-image.png"
import 'aos/dist/aos.css';
import Aos from "aos";


const Header = () => {

    useEffect(() => {
        Aos.init({
            duration: 2200, // Specify the animation duration
            offset: 40, // Specify the offset (in px) from the original trigger point
        });
    }, []);

    return (
        <div className="flex gap-14 px-20 align-baseline font-sans relative pt-10">
            <div className="bg-gray-500 rounded-full w-60 h-80 absolute left-8 top-3 blur-3xl"> </div>

            <div className="w-1/2 py-10 relative">
                <h1 data-aos="fade-up" className="text-6xl font-sans font-bold py-8 ">Discover <br /> Most Suitable Property</h1>
                <p className="text-xl text-[#d1caca] py-10 font-sans">Find a variety of properties that suit you very easiltyForget all difficulties in finding a residence for you
                </p>
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
            </div>
            <div data-aos="fade-left" className="align-middle p-8">
                <img className="rounded-t-full border-4 border-gray-600" height={300} width={400} src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;