import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



export const PageLinks = () => (
    
        <Container className="hero-wrapper">
            <div className="hero-link-container">
                <Link className="hero-link slidetwo" to="/about">About</Link>
                <Link className="hero-link slidetwo" to="/work">Work</Link>
                <Link className="hero-link slidetwo" to="/design">Design</Link>
                <Link className="hero-link slidetwo" to="/contact">Contact</Link>
            </div>
        </Container> 
)