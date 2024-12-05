import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Header from "../component/Header";

const Layout = () => {
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;