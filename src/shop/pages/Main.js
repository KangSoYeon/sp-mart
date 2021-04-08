import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FooterInfo from '../components/FooterInfo';
import TopBar from '../components/TopBar';
import Header from '../components/Header';


const Main = () => {
    return (
        <div>
            <Header />
            {/* <TopBar /> */}
            <NavBar />
            요기 제목~
            <Outlet />
            <FooterInfo />
            <Footer />
        </div>
    )
}

export default Main
