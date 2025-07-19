import { createBrowserRouter, } from "react-router-dom";

import Home from "./pages/home"
import Login from "./pages/login"
import SignUp from "./pages/signup"
import DrinkList from "./pages/drinklist"
import WannaBuy from "./pages/wannabuy"



const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home /> 
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/drinklist",
        element: <DrinkList />
    },
    {
        path: "/wannabuy",
        element: <WannaBuy />
    },
])

export default router
