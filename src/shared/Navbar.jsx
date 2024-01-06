import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/Provider";

const Navbar = () => {

    // const handelPropertyClick = () => {
    //     console.log('clicked');
    // }

    return (
        <div className="bg-[#131110] text-white p-3  flex justify-between px-16">
            <h1 className="text-3xl">DreamDwell</h1>
            <div className="flex gap-4 text-xl">
                <Link to={'/'}>Home</Link>
                <Link to={'/properites'}>Properites</Link>
                <Link to={'countact'}>Countact Us</Link>
                <Link to={'/add-properites'} >Add Property</Link>
                <Link to={'/login'} >Login</Link>
                <Link to={'/register'} >Register</Link>
            </div>
        </div>
    );
};

export default Navbar;