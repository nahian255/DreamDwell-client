import Aos from "aos";
import image from "../../assets/hero-image.png"
import App from "./faq/faq";
import { useEffect } from "react";

const OurValue = () => {
    useEffect(() => {
        Aos.init({
            duration: 2200, // Specify the animation duration
            offset: 80, // Specify the offset (in px) from the original trigger point
        });
    }, []);
    return (
        <div className="md:flex gap-16 align-baseline">
            <div data-aos="fade-right" className="align-middle lg:p-10 ">
                <img className="rounded-t-full border-8 border-gray-300" height={300} width={400} src={image} alt="" />
            </div>
            <div className="lg:w-1/2 lg:p-10 py-5 relative">
                <h1 data-aos="fade-up" className="text-orange-500 text-2xl font-semibold"> Our Value</h1>
                <h1 data-aos="fade-up" className="text-4xl font-sans text-[#1f3e72] font-bold">Value We Give to You</h1>
                <p className="text-md py-2 text-[#8c8b8b]">We always ready to help by providijng the best services for you.
                    We beleive a good blace to live can make your life better</p>
                <App />
            </div>

        </div>
    );
};

export default OurValue;