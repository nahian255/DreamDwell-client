import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/Provider";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Menu, rem } from '@mantine/core';
import { IconSettings, } from '@tabler/icons-react';
import './css/shareStyle.css'
const auth = getAuth(app);

const Navbar = () => {
    const { user } = useContext(AuthContext)

    // sign Out button ...
    const handelOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(() => {
            // An error happened.
        });
    };

    // const handleBookingsClick = () => {
    //     fetch(`http://localhost:3000/api/booking-properites?email=${user.email}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Server response:', data);
    //         })
    //         .catch(error => {
    //             console.error('Error retrieving booking data:', error);
    //         });
    // };

    return (
        <div className="fix">
            <div className="bg-[#131110] text-white p-3 fixe flex justify-between px-16">
                <h1 className="text-3xl">DreamDwell</h1>
                <div className="flex gap-4 text-xl">

                    <NavLink to={'/'} activeClassName="active">Home</NavLink>
                    <NavLink to={'/properites'} activeClassName="active">Properites</NavLink>
                    <NavLink to={'countact'} activeClassName="active">Countact Us</NavLink>
                    <NavLink to={'/add-properites'} activeClassName="active">Add Property</NavLink>
                    <Link ></Link>
                    <Link></Link>
                    <Link  ></Link>


                    {
                        user ?
                            (
                                <li className="text-white flex gap-3">
                                    <Menu shadow="md" width={200}>
                                        <Menu.Target>
                                            <h1 className="hover:bg-[#3064bc] text-white px-4 py-1 text-lg rounded-md bg-blue-700" style={{ cursor: 'pointer' }}>
                                                {user?.email}
                                            </h1>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                                <Link to={'/booking-properites'}> Booking Property</Link>
                                            </Menu.Item>
                                            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                                <button onClick={handelOut}> LogOut</button>
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                </li>
                            ) :
                            (
                                <>
                                    <Link to={'/login'} >
                                        <button
                                            className="hover:bg-[#3064bc] text-white px-4 py-1 text-lg rounded-md bg-blue-700"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                </>
                            )
                    }
                </div>

            </div>
        </div>

    );
};

export default Navbar;