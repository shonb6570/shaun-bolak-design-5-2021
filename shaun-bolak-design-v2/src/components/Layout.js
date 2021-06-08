import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
        <Container fluid className="layout-container">
            {props.children}
        </Container>    
)
