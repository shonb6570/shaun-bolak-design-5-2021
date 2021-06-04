import React from 'react'; 
import Nav from 'react-bootstrap/Nav';


export const NavLinks = () => {
        return (
            <React.Fragment>
                <Nav.Link id="navigation-link" className="nav-links" href="/about">About</Nav.Link>
                <Nav.Link id="navigation-link" className="nav-links" href="/work">Work</Nav.Link>
                <Nav.Link id="navigation-link" className="nav-links" href="/design">Design</Nav.Link>
                <Nav.Link id="navigation-link" className="nav-links" href="/contact">Contact</Nav.Link>
            </React.Fragment>
        ) 
}
