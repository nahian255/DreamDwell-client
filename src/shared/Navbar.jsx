import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/Provider";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Avatar, Burger, Menu, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Swal from 'sweetalert2'
import dd from "../assets/dd.jpg"
import './css/shareStyle.css';

const auth = getAuth(app);

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    const handelOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logout Succesfully",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch(() => {
            // An error happened.
        });
        toggleMobileNav()
    };

    const toggleMobileNav = () => {
        setMobileNavOpen(!isMobileNavOpen);
    };

    const [opened, { toggle }] = useDisclosure();

    return (
        <div className=''>
            <div className="bg-[#131110] text-white p-3 flex justify-between items-center px-4 md:px-16">
                <div className="flex">
                    <Link to='/'><Avatar src={dd} className="w-20 md:w-32 h-10" alt="logoImg" />
                    </Link>
                    {/* <h1 className="text-xl md:text-2xl">DreamDwell</h1> */}
                </div>
                <div className="flex gap-4 text-lg lg:hidden">
                    <button onClick={toggleMobileNav} className="text-white">
                        {/* <IconSettings size={24} /> */}
                        <Burger className="bg-white" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
                    </button>
                </div>
                <div className="hidden lg:flex gap-4 text-lg">
                    <NavLink to={'/'} activeClassName="active">Home</NavLink>
                    <NavLink to={'/properites'} activeClassName="active">Properties</NavLink>
                    <NavLink to={'countact'} activeClassName="active">Contact Us</NavLink>
                    <NavLink to={'/add-properites'} activeClassName="active">Add Property</NavLink>
                    {user ? (
                        <>
                            <NavLink to={'/booking-properites'} activeClassName="active">Booking Property</NavLink>
                            <NavLink to={'/my-properites'} activeClassName="active">My Property</NavLink>
                            <li className="text-white flex gap-3">
                                <Menu shadow="md" width={140}>
                                    <Menu.Target>
                                        {/* <h1 className="hover:bg-[#3064bc] text-white  text-xs md:text-base rounded-md bg-blue-700" style={{ cursor: 'pointer' }}>
                                        </h1> */}
                                        <button>
                                            <Avatar radius="xl" src={user?.photoURL} alt="it's me" />
                                        </button>
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <div >
                                            <button className="text-black text-left text-xl p-2 w-full" onClick={handelOut}>Logout</button>
                                        </div>

                                    </Menu.Dropdown>
                                </Menu>
                            </li>
                        </>
                    ) : (
                        <NavLink to={'/login'} activeClassName="active">
                            <button className="hover:bg-[#3064bc] text-white px-2 md:px-4 py-1 text-md md:text-lg rounded-md bg-blue-700">
                                Login
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>

            {/* responsive  Nav */}
            {isMobileNavOpen && (
                <div className="lg:hidden bg-[#131110] text-white px-8 md:px-16 flex flex-col gap-4">
                    <NavLink to={'/'} activeClassName="active" onClick={toggleMobileNav}>Home</NavLink>
                    <NavLink to={'/properites'} activeClassName="active" onClick={toggleMobileNav}>Properties</NavLink>
                    <NavLink to={'countact'} activeClassName="active" onClick={toggleMobileNav}>Contact Us</NavLink>
                    <NavLink to={'/add-properites'} activeClassName="active" onClick={toggleMobileNav}>Add Property</NavLink>
                    {user ? (
                        <>
                            <NavLink to={'/booking-properites'} activeClassName="active" onClick={toggleMobileNav}>Booking Property</NavLink>
                            <NavLink to={'/my-properites'} activeClassName="active">My Property</NavLink>
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
