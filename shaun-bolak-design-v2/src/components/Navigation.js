import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export const Navigation = () => (
    
        <Navbar sticky="top" id="navigation-bar" expand="lg">
        <Container>
            <Navbar.Brand id="navigation-logo" href="#home">
                <img
                    src="../assets/logo-full.svg"
                    width="100"
                    height="40"
                    className="d-inline-block align-top"
                    alt="shaun bolak design logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle id="navigation-toggle" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link id="navigation-link" href="/about">About</Nav.Link>
                <Nav.Link id="navigation-link" href="/Work">Work</Nav.Link>
                <Nav.Link id="navigation-link" href="/design">Design</Nav.Link>
                <Nav.Link id="navigation-link" href="/contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    
)




