import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/sharedComponents/Navbar';
import Footer from '../components/Footer2';
import { ToastContainer } from 'react-toastify';



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;