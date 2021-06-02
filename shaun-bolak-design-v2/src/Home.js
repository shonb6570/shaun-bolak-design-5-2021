import React from 'react';
import Container from 'react-bootstrap/Container';
import { PageLinks } from './components/PageLinks';

export const Home = () => {
    return (
        <Container fluid className="home-bg-img">
            <PageLinks />
        </Container>
    )
}
