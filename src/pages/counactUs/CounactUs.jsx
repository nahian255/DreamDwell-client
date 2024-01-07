import { useState } from 'react';

import image from '../../assets/sendMsg.jpg'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Add your logic here to handle form submission
        // You can use formData to send the data to your server or perform other actions
        console.log('Form submitted:', formData);

        // Reset the form data
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        try {
            const response = await fetch('http://localhost:3000/api/add-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form data submitted successfully');
                // Reset the form data if needed
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Failed to submit form data:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };


    return (
        <section className='p-20'>
            <div className=" md:flex">
                <div className=' w-1/2'>
                    <div className=''>
                        <h1 className="text-5xl font-sans text-[#1f3e72] font-bold">Get in touch</h1>
                        <p className="text-md py-2 text-[#8c8b8b]">Let us know how we can help.</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="mt-1 p-2 w-2/3 border-2 border-gray-300 rounded-md"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="mt-1 p-2 w-2/3 border-2 border-gray-300 rounded-md"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 p-2 w-2/3 border-2 border-gray-300 rounded-md"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-[#1f3e72] text-white p-2 rounded-md hover:bg-blue-700"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className=" ">
                    <img className="" height={300} width={570} src={image} alt="" />
                </div>
            </div>

            <div className='py-8'>
                <h1 className="text-4xl font-sans text-[#1f3e72] font-bold text-center"> Fell free to contact us</h1>
                <div className="grid grid-cols-2 gap-4 transition ease-in-out text-center py-8">
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
        </section>

    );
};

export default ContactUs;
