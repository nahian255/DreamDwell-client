import image from "../../assets/hero-image.png"

const Contact = () => {
    return (
        <div className="flex px-28 align-baseline ">

            <div className="w-1/2 p-10 relative">
                <h1 className="text-orange-500 text-2xl font-semibold"> Our Contact Us</h1>
                <h1 className="text-4xl text-[#1f3e72] font-bold">Easy to contact us</h1>

                {/* <div className="bg-gray-200 w-32 h-32 -top-12"></div> */}
            </div>
            <div className="align-middle  p-10  ">
                <img className="rounded-t-full border-4 border-gray-300" height={300} width={400} src={image} alt="" />
            </div>

        </div>
    );
};

export default Contact;