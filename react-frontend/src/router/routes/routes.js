//** components imported */
import Home from "../../pages/dashboard";
import Login from "../../pages/login-register/log-in";
const protectedRoutes = [
    {
        path: "",
        component: "",
        exact: true,
    }
];
const publicRoutes = [
    {
        path: "home",
        component: <Home/>,
        exact: true,
    },
    {
        path: "login",
        component: <Login/>,
        exact: true,
    }
];

export { protectedRoutes, publicRoutes };