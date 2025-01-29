
import { Route, useNavigate, Router, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const Main = () => {
    const navigate = useNavigate()
    return (
        <main>
        <Routes>
            <Route exact path="/" Component={Dashboard} render={() => navigate('/login')}/>
            <Route exact path="/login" Component={Login}></Route>
        </Routes>
        </main>
    )
}

export default Main;