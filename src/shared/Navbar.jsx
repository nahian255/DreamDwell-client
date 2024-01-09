import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/Provider";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
// import { AuthContext } from "../authProvider/Provider";

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
                                <li className="text-white hover:text-orange-400">
                                    <button title="pic asbe">user img</button>
                                    <button onClick={handelOut}>sing Out</button>
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