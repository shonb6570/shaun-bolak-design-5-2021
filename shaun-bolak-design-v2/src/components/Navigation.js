import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/logo-full.svg';
import { NavLinks } from './NavLinks';

export const NavigationBar = () => {
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
            <Navbar.Toggle id="navigation-toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLinks />
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    );
}




