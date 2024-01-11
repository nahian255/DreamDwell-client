import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/Provider";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Menu, rem } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import './css/shareStyle.css';

const auth = getAuth(app);

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const handelOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(() => {
            // An error happened.
        });
    };

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };


    return (
        <div className=''>
            <div className="bg-[#131110] text-white p-3 flex justify-between items-center px-4 md:px-16">
                <h1 className="text-2xl md:text-3xl">DreamDwell</h1>
                <div className="flex gap-4 text-lg md:hidden">
                    <button onClick={toggleMobileNav} className="text-white">
                        <IconSettings size={24} />
                    </button>
                </div>
                <div className="hidden md:flex gap-4 text-lg">
                    <NavLink to={'/'} activeClassName="active">Home</NavLink>
                    <NavLink to={'/properites'} activeClassName="active">Properties</NavLink>
                    <NavLink to={'countact'} activeClassName="active">Contact Us</NavLink>
                    <NavLink to={'/add-properites'} activeClassName="active">Add Property</NavLink>
                    {user ? (
                        <li className="text-white flex gap-3">
                            <Menu shadow="md" width={200}>
                                <Menu.Target>
                                    <h1 className="hover:bg-[#3064bc] text-white px-2 md:px-4 py-1 text-md md:text-lg rounded-md bg-blue-700" style={{ cursor: 'pointer' }}>
                                        {user?.email}
                                    </h1>
                                </Menu.Target>
                                <Menu.Dropdown>
                                    <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                        <NavLink to={'/booking-properites'} activeClassName="active">Booking Property</NavLink>
                                    </Menu.Item>
                                    <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                        <button onClick={handelOut}>Logout</button>
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </li>
                    ) : (
                        <NavLink to={'/login'} activeClassName="active">
                            <button className="hover:bg-[#3064bc] text-white px-2 md:px-4 py-1 text-md md:text-lg rounded-md bg-blue-700">
                                Login
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileNavOpen && (
                <div className="md:hidden bg-[#131110] text-white p-4 flex flex-col gap-4">
                    <NavLink to={'/'} activeClassName="active" onClick={toggleMobileNav}>Home</NavLink>
                    <NavLink to={'/properites'} activeClassName="active" onClick={toggleMobileNav}>Properties</NavLink>
                    <NavLink to={'countact'} activeClassName="active" onClick={toggleMobileNav}>Contact Us</NavLink>
                    <NavLink to={'/add-properites'} activeClassName="active" onClick={toggleMobileNav}>Add Property</NavLink>
                    {user ? (
                        <>
                            <NavLink to={'/booking-properites'} activeClassName="active" onClick={toggleMobileNav}>Booking Property</NavLink>
                            <button onClick={handelOut} className="text-white" >Logout</button>
                        </>
                    ) : (
                        <NavLink to={'/login'} activeClassName="active" onClick={toggleMobileNav}>
                            <button className="hover:bg-[#3064bc] text-white px-2 py-1 text-md rounded-md bg-blue-700">
                                Login
                            </button>
                        </NavLink>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
