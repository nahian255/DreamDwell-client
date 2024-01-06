import image from "../../assets/hero-image.png"

const Contact = () => {
    return (
        <div className="flex gap-14 align-baseline ">
            <div className="w-1/2 p-10 relative">
                <h1 className="text-orange-500 text-2xl font-semibold"> Our Contact Us</h1>
                <h1 className="text-4xl text-[#1f3e72] font-bold">Easy to contact us</h1>
                <div className="py-16">
                    <div className="grid grid-cols-2 gap-4 transition ease-in-out text-center">
                        {/* Call Section */}
                        <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                            <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Chat</h2>
                            <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                            <button className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded">chat now</button>
                        </div>
                        <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                            <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Call</h2>
                            <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                            <button className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded">call now</button>
                        </div>
                        <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                            <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Email</h2>
                            <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                            <button className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded">send now</button>
                        </div>
                        <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                            <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Massage</h2>
                            <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                            <button className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded">Message </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="align-middle p-10 ">
                <img className="rounded-t-full border-4 border-gray-300" height={300} width={400} src={image} alt="" />
            </div>

        </div>
    );
};

export default Contact;