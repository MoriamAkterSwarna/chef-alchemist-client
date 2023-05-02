import React from 'react';
import NavigationBar from '../../../Share/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Share/Footer';

const MainLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;