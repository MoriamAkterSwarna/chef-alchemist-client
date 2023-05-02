import React from 'react';
import NavigationBar from '../Share/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;