import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Properites from "../pages/properites/Properites";
import Main from "../layout/Main";
import CounactUs from "../pages/counactUs/CounactUs";
import AddProperty from "../pages/addProperty/AddProperty";
import ProperitesDetails from "../pages/properites/ProperitesDetails";
import Login from "../pages/login/Login";
import Singup from "../pages/singUp/Singup";
import BookingProperty from "../pages/booking/BookingProperty";
import MyProperty from "../pages/myProperty/MyProperty";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/properites',
                element: <Properites />,
                loader: async () => {
                    return fetch(`https://anothertry-q9vd.onrender.com/properites`);
                },
            },
            {
                path: '/properites/:id',
                element: <ProperitesDetails />,
                loader: async ({ params }) => {
                    return fetch(`https://anothertry-q9vd.onrender.com/single-properites/${params.id}`);
                },
            },
            {
                path: '/countact',
                element: <CounactUs />
            },
            {
                path: 'add-properites',
                element: <AddProperty />
            },
            {
                path: 'booking-properites',
                element: <BookingProperty />
            },
            {
                path: '/my-properites',
                element: <MyProperty></MyProperty>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Singup />
            },
        ]
    },

]);

export default router;