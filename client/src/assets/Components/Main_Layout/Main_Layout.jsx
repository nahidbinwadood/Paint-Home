import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'


const Main_Layout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Toaster />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main_Layout;