import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FooterInfo from '../components/FooterInfo';
import TopBar from '../components/TopBar';


const Main = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            요기 제목~
            <Outlet />
            <FooterInfo />
            <Footer />
        </div>
    )
}

export default Main
