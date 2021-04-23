import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FooterInfo from '../components/FooterInfo';
import Header from '../components/Header';


const Main = () => {
    return (
        <div>
            <Header />
            {/* <TopBar /> */}
            <NavBar />
            <Outlet />
            <FooterInfo />
            <Footer />
        </div>
    )
}

export default Main
