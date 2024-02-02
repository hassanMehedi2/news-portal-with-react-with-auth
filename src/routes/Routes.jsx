import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import Privateroute from "./Privateroute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader : ()=> fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <Privateroute><News></News></Privateroute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);
export default routes;