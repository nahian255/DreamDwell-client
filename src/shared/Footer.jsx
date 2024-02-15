import { Avatar } from '@mantine/core';
import dd from '../assets/dd.jpg'
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="py-2 ">
            <hr />
            <div className="px-8 lg:px-28 md:flex justify-between p-2 md:p-6 bg-gray-100">
                <div className="">
                    <Link to='/'><Avatar src={dd} className="w-15 md:w-20 h-15" alt="logoImg" />
                    </Link>
                    <h1 className="text-orange-500 font-bold text-3xl">DreamDwell</h1>
                    <p className="text-[#8c8b8b] text-xs lg:text-base font-sans py-">Our vision is to make all people <br />
                        the best place to live for them.</p>
                </div>
                <div className='py-4 md:py-0'>
                    <h1 className="text-[#1f3e72] font-bold text-xl md:text-3xl">COMPANY</h1>
                    <div className='inline-block '>
                        <p><NavLink to={'/'} >Home</NavLink></p>
                        <p> <NavLink to={'/properites'} >Properties</NavLink></p>
                        <p><NavLink to={'countact'} >Contact Us</NavLink></p>
                        <p><NavLink to={'/add-properites'} >Add Property</NavLink></p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[#1f3e72] font-bold text-xl md:text-3xl">LEGAL</h1>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookie policy</p>
                </div>

            </div>

        </div >
    );
};

export default Footer;