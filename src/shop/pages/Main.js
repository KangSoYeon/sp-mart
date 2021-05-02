import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import FooterInfo from '../components/FooterInfo';
import Header from '../components/Header';
import { Container } from '@material-ui/core';


const Main = () => {
    return (
        <Container fixed>
            <Header />
            {/* <TopBar /> */}
            <NavBar />
            <Outlet />
            <FooterInfo />
            <Footer />
        </Container>
    )
}

export default Main
