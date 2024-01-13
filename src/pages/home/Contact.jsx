import { useEffect } from "react";
import image from "../../assets/hero-image.png"
import Connection from "./contactPart/Connection";
import Aos from "aos";

const Contact = () => {

    useEffect(() => {
        Aos.init({
            duration: 2200, // Specify the animation duration
            offset: 80, // Specify the offset (in px) from the original trigger point
        });
    }, []);

    return (
        <div className="md:flex gap-14 align-baseline ">
            <div className="lg:w-1/2 lg:p-10 relative">
                <h1 data-aos="fade-up" className="text-orange-500 text-2xl font-semibold"> Our Contact Us</h1>
                <h1 data-aos="fade-up" className="text-4xl text-[#1f3e72] font-bold">Easy to contact us</h1>
                <div className="lg:py-16">
                    <Connection />
                </div>
            </div>
            <div data-aos="fade-left" className="align-middle p-10 ">
                <img className="rounded-t-full border-4 border-gray-300" height={300} width={400} src={image} alt="" />
            </div>

        </div>
    );
};

export default Contact;