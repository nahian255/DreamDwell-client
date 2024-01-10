import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/Provider";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Menu, Button, rem } from '@mantine/core';
import { IconSettings, } from '@tabler/icons-react';

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
                    <Link to={'/'}>Home</Link>
                    <Link to={'/properites'}>Properites</Link>
                    <Link to={'countact'}>Countact Us</Link>
                    <Link to={'/add-properites'} >Add Property</Link>
                    {
                        user ?
                            (
                                <li className="text-white flex gap-3">
                                    <div>
                                        <Menu shadow="md" width={200}>
                                            <Menu.Target>
                                                <Button>{user?.email}</Button>
                                            </Menu.Target>

                                            <Menu.Dropdown>
                                                <Menu.Label>Application</Menu.Label>
                                                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                                    <Link to={'booking-properites'} >Bookings</Link>
                                                </Menu.Item>
                                                <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                                    <button onClick={handelOut}>Sing out</button>
                                                </Menu.Item>
                                                <Menu.Divider />
                                            </Menu.Dropdown>
                                        </Menu>
                                    </div>
                                    <button title="pic asbe"></button>
                                </li>
                            ) :
                            (
                                <>
                                    <Link to={'/login'} >Login</Link>
                                    <Link to={'/register'} >Register</Link>
                                </>
                            )
                    }
                </div>

            </div>
        </div>

    );
};

export default Navbar;