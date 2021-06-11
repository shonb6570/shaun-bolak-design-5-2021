import React from 'react';
import Container from 'react-bootstrap/Container';
import { PageLinks } from './components/PageLinks';
import { LeftLinks } from './components/LeftSideBar';
import { RightLinks } from './components/RightSideBar';

export const Home = () => {
    return (
        <Container fluid className="home-bg-img">
            <LeftLinks />
            <RightLinks />
            <PageLinks />
        </Container>
    )
}
