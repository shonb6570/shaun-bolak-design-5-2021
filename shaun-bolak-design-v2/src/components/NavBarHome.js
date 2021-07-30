import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/logo-full.svg';


export const NavBarHome = () => {
    return (
        <Navbar sticky="top" id="navigation-bar" expand="lg">
            <Container id="nav-container">
                <Navbar.Brand id="navigation-logo" href="/">
                    <img
                        src={ Logo }
                        className="d-inline-block align-top nav-logo"
                        alt="shaun bolak design logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>  
    );
}