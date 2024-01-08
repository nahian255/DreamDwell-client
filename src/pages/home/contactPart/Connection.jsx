
const Connection = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 transition ease-in-out text-center py-8">
                {/* Call Section */}
                <div className="rounded shadow-md hover:shadow-xl border-2 border-t-gray-200 p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Chat</h2>
                    <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">Visit our website</h2>
                    <button
                        className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => window.open('http://localhost:5173/', '_blank')}                        >
                        Chat now
                    </button>
                </div>

                <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Call</h2>
                    <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                    <button onClick={() => window.location.href = 'tel:+0123456789'} className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded">call now</button>
                </div>
                <div className=" rounded shadow-md hover:shadow-xl border-2 border-t-gray-200  p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Email</h2>
                    <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">dreamdwell@email.com</h2>
                    <button onClick={() => window.location.href = 'mailto:dreamdwell@email.com'} className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded">send email</button>
                </div>
                <div className="rounded shadow-md hover:shadow-xl border-2 border-t-gray-200 p-4">
                    <h2 className="text-2xl text-[#1f3e72]  font-bold mb-1">Message</h2>
                    <h2 className="text-xl text-[#8c8b8b] font-bold mb-1">0123456789</h2>
                    <button
                        className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 rounded"
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