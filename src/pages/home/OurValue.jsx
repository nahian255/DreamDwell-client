import image from "../../assets/hero-image.png"
import App from "./faq/faq";

const OurValue = () => {
    return (
        <div className="flex px-28 align-baseline ">
            <div className="align-middle  p-10 ">
                <img className="rounded-t-full border-8 border-gray-300" height={300} width={400} src={image} alt="" />
            </div>
            <div className="w-1/2 p-10 relative">
                <h1 className="text-orange-500 text-2xl font-semibold"> Our Value</h1>
                <h1 className="text-4xl font-sans text-[#1f3e72] font-bold">Value We Give to You</h1>
                <p className="text-md py-2 text-[#8c8b8b]">We always ready to help by providijng the best services for you.
                    We beleive a good blace to live can make your life better</p>
                <App />

                {/* <div className="bg-gray-200 w-32 h-32 -top-12"></div> */}
            </div>

        </div>
    );
};

export default OurValue;