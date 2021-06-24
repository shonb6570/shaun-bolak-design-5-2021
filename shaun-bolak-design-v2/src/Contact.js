import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactTitle from './assets/contact-title.svg';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const Contact = () => {
    return (
        <Container fluid className="Contact-container">

            <div className="Contact-page-wrapper">

                <Container>
                        <div className="design-title">
                            <img
                                src={ ContactTitle }
                                className="work-title-svg"
                                alt="Work"
                            />
                        </div>
                </Container>

                <Container>

                    {/* <!-- content--> */}
                    <div className="contact-copy">
                        <span className="contact-body">
                            Hello.
                        </span>
                        <span className="contact-body"> 
                            Is it me
                        </span>
                        <span className="contact-body"> 
                            your looking 
                        </span>
                        <span className="contact-body"> 
                            for?
                        </span>
                    </div>

                    {/*- content */}

                </Container>
                
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </Container>
    )
}