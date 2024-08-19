import Home from "../page/Home";
import ListUser from "../page/ListUser";
import Login from "../page/Login";
import Register from "../page/Register";
import {menu, product} from "../helpers/data.jsx"
import DetailUser from "../page/DetailUser.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";



export const routeList = [
    {
        path : '/',
        element : <Home menu = {menu} />
    },

    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/list-user',
        element : (
            <ProtectedRoute>
            <ListUser />
            </ProtectedRoute>
        )
    },
    {
        path : '/detail-user/:id',
        element : (
             <ProtectedRoute>
                 <DetailUser menu = {menu} product = {product} />
             </ProtectedRoute>
        )
    },
    
]