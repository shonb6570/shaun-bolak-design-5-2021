import React from 'react';
import Container from 'react-bootstrap/Container';

export const Footer = ({ children }) => {
    return (
        <Container fluid>
            <div className="phantom" />
            <div className="footer">
                { children }
            </div>
        </Container>
    )
}
