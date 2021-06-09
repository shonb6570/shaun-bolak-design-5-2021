import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export const PageLinks = () => (
    
        <Container className="hero-wrapper">
            <div className="hero-link-container">
                <Link className="hero-link" to="/about">About</Link>
                <Link className="hero-link" to="/work">Work</Link>
                <Link className="hero-link" to="/design">Design</Link>
                <Link className="hero-link" to="/contact">Contact</Link>
            </div>
        </Container> 
)