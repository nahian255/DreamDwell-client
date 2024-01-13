import { useEffect } from "react";
import image from "../../assets/hero-image.png"
import 'aos/dist/aos.css';
import Aos from "aos";


const Header = () => {

    useEffect(() => {
        Aos.init({
            duration: 1200, // Specify the animation duration
            offset: 40, // Specify the offset (in px) from the original trigger point
        });
    }, []);

    return (
        <div className="md:flex gap-14 px-8 md:px-20  align-baseline font-sans relative pt-3 lg:pt-10">
            <div className="bg-gray-500 rounded-full w-32 md:w-52 lg:w-60 h-44 md:h-60 lg:h-80 absolute left-8 top-3 blur-3xl"> </div>

            <div className="lg:w-1/2 lg:py-10 relative">
                <h1 data-aos="fade-up" className="text-3xl lg:text-6xl font-sans font-bold md:py-4 lg:py-6 ">Discover  Most Suitable Property with <span className="text-orange-500">  Dream Dwell</span></h1>
                <p className="md:text-base lg:text-xl text-[#d1caca] py-2 md:py-4 lg:py-8 font-sans">Find a variety of properties that suit you very easiltyForget all difficulties in finding a residence for you
                </p>
                <div className="flex gap-3 lg:gap-6">
                    <div>
                        <p className="text-3xl lg:text-5xl">9,000<span className="text-orange-500">+</span></p>
                        <h1 className="text-[#8c8b8b] text-sm lg:text-base font-sans">Premium Product</h1>
                    </div>
                    <div>
                        <p className="text-3xl lg:text-5xl">9,000<span className="text-orange-500">+</span></p>
                        <h1 className="text-[#8c8b8b] text-sm lg:text-base font-sans ">Happy Customer</h1>
                    </div>
                    <div>
                        <p className="text-3xl lg:text-5xl">28<span className="text-orange-500">+</span></p>
                        <h1 className="text-[#8c8b8b] text-sm lg:text-base font-sans">Awards Winning</h1>
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