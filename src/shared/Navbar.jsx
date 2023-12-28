import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-slate-200 p-4  flex justify-between px-16">
            <h1 className="text-3xl">DreamDwell</h1>
            <div className="flex gap-4 text-xl">
                <Link to={'/'}>Home</Link>
                <Link to={'/properites'}>Properites</Link>
                <Link to={'countact'}>Countact Us</Link>
                <Link to={'/add-properites'}>Add Property</Link>
            </div>
        </div>
    );
};

export default Navbar;