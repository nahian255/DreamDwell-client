import { useState } from 'react';

import image from '../../assets/sendMsg.jpg'
import Connection from '../home/contactPart/Connection';
import Swal from 'sweetalert2';


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

        if (!formData.name) {
            console.error('Name field is empty. Please enter your name.');
            return;
        }

        console.log('Form submitted:', formData);
        // Reset the form data
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        try {
            const response = await fetch('https://anothertry-q9vd.onrender.com/api/add-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form data submitted successfully');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Message Sent Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                // Reset the form data if needed
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Failed to submit form data:', response.statusText);
                Swal.fire({
                    icon: "error",
                    title: "Failed to send message",
                });
            }
        } catch (error) {
            console.error('Error submitting form data:', error.message);
            Swal.fire({
                icon: "error",
                title: "Failed to send message",
            });
        }
    };


    return (
        <section className='p-8 lg:p-20'>
            <div className=" md:flex ">
                <div className=' lg:w-1/2'>
                    <div className='text-center'>
                        <h1 className="text-5xl font-sans text-[#1f3e72] font-bold">Get in Touch with Us</h1>
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
                                className="mt-1 p-2 w-full lg:w-2/3 border-2 border-gray-300 rounded-md"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                required
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
                                className="mt-1 p-2 w-full lg:w-2/3 border-2 border-gray-300 rounded-md"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
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
                                className="mt-1 w-full lg:w-2/3 border-2 border-gray-300 rounded-md"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-[#1f3e72] w-full lg:w-2/3 text-white p-2 rounded-md hover:bg-blue-700"
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
                <h1 className="text-4xl font-sans text-[#1f3e72] font-bold text-center"> Feel Open to Connect</h1>
                <Connection />
            </div>



        </section>

    );
};

export default ContactUs;
