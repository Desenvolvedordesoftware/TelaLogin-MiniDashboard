import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth"

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}; 

const RoutesApp = () => {
    return (
        <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/Dashboard" element={<Private Item={Dashboard}/>}/>
                <Route path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;