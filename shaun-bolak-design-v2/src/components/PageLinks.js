import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

export const PageLinks = () => (
    
        <Container className="hero-link-container">
            <Link className="hero-link" to="/about">About</Link>
            <Link className="hero-link" to="/about">Work</Link>
            <Link className="hero-link" to="/about">Design</Link>
            <Link className="hero-link" to="/about">Contact</Link>
        </Container> 
)