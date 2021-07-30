import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavBarHome } from './components/NavBarHome';
import { Transition } from './components/Transition';
import { PageLinks } from './components/PageLinks';
import { LeftLinks } from './components/LeftSideBar';
import { RightLinks } from './components/RightSideBar';

export const Home = () => {
        return (
        <Container fluid id="homeContainer">
            <NavBarHome />
            <Container fluid className="home-bg-img">
                <Transition />
                <LeftLinks />
                <RightLinks />
                <PageLinks />
            </Container>
        </Container>
    )
}
