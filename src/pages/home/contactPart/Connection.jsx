
const Connection = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 transition ease-in-out text-center py-4 lg:py-8">
                {/* Call Section */}
                <div className="rounded shadow-md hover:shadow-xl border-2 border-t-gray-200 p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold">Chat</h2>
                    <h2 className="texl-sm lg:text-xl text-[#8c8b8b] font-bold mb-1">Visit our website</h2>
                    <button
                        className="text-white pb-2 px-3 py-1 rounded-md hover:bg-blue-700 bg-[#1f3e72]"
                        onClick={() => window.open('http://localhost:5173/', '_blank')}                        >
                        Chat now
                    </button>
                </div>

                <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold">Call</h2>
                    <h2 className="texl-sm lg:text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                    <button onClick={() => window.location.href = 'tel:+0123456789'} className="text-white pb-2 px-3 py-1 rounded-md hover:bg-blue-700 bg-[#1f3e72]">call now</button>
                </div>
                <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold mb-">Email</h2>
                    <h2 className="text-xs md:text-base lg:text-xl text-[#8c8b8b] font-bold mb-2">dreamdwell@email.com</h2>
                    <button onClick={() => window.location.href = 'mailto:dreamdwell@email.com'} className="text-white pb-2 px-3 py-1 rounded-md hover:bg-blue-700 bg-[#1f3e72]">send email</button>
                </div>
                <div className="rounded shadow-md hover:shadow-xl border-2 border-t-gray-200 p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold">Message</h2>
                    <h2 className="texl-sm lg:text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                    <button
                        className="text-white pb-2 px-3 py-1 rounded-md hover:bg-blue-700 bg-[#1f3e72]"
                        onClick={() => window.open('http://localhost:5173/countact', '_blank')}
                    >
                        Message
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Connection;