import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Container } from '@material-ui/core';


const Main = () => {
    return (
        <>
            <Container fixed>
                <Header />
                <NavBar />
                <Outlet />
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer />
        </>
    )
}

export default Main
