import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Properites from "../pages/properites/Properites";
import Main from "../layout/Main";
import CounactUs from "../pages/counactUs/CounactUs";
import AddProperty from "../pages/addProperty/AddProperty";
import ProperitesDetails from "../pages/properites/ProperitesDetails";

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
                    return fetch(`http://localhost:3000/api/properites/`);
                },
            },
            {
                path: '/properites/:id',
                element: <ProperitesDetails />,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:3000/api/properites/${params.id}`);
                },
            },
            {
                path: 'countact',
                element: <CounactUs />
            },
            {
                path: 'add-properites',
                element: <AddProperty />
            },
        ]
    },

]);

export default router;