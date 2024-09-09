import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blobs from "../components/Blobs";

const MainLayout = () => {
    return (
        <>
            <Header />
            <Blobs />
            <Outlet />
            <Footer />
        </>
    );
};
export default MainLayout;
