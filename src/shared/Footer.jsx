import { Avatar } from '@mantine/core';
import dd from '../assets/dd.jpg'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="py-2 ">
            <hr />
            <div className="px-8 lg:px-28 flex justify-between py-2 bg-gray-100">
                <div className="">
                    <Link to='/'><Avatar src={dd} className="w-20 md:w-28 h-24" alt="logoImg" />
                    </Link>
                    <h1 className="text-orange-500 font-bold text-3xl">DreamDwell</h1>
                    <p className="text-[#8c8b8b] text-sm lg:text-base font-sans py-">Our vision is to make all people <br />
                        the best place to live for them.</p>
                </div>
                <div>
                    <h1 className="text-[#1f3e72] font-bold text-3xl">Information</h1>
                    <p>address</p>
                    <p>Social Media</p>
                    <p>Linkedin account</p>

                </div>
            </div>

        </div>
    );
};

export default Footer;