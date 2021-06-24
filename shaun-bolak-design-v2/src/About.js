import React from 'react';
import Container from 'react-bootstrap/Container';
import AboutTitle from './assets/about-title.svg';
import AboutPhoto from './assets/portrait.svg';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const About = () => {
    return (
        <Container fluid>

            <div className="about-page-wrapper">

                {/* <Container fluid>
                    <div className="about-header-bg"></div>
                </Container> */}

                <Container>
                        <div className="about-title">
                            <img
                                src={ AboutTitle }
                                className="about-title-svg"
                                alt="About"
                            />
                        </div>
                </Container>

                <Container fluid className="about-bg">
                            <div>
                                <img
                                    src={ AboutPhoto }
                                    className="about-photo-mobile"
                                    alt="Shaun Bolak Portrait"
                                />
                            </div>
                            <Container className="about-copy-wrapper">
                                <div className="about-copy-container">
                                    <div className="about-copy-title title-primary">
                                        <span><span className="dropcap">W</span>hen I'm not ruling the world...</span> 
                                    </div>
                                    <div className="about-copy-1 copy-primary">
                                        <span>I am creating projects that make it better. 
                                        I am an artist at heart. So, naturally I love design - 
                                        especially, Logo and Web Design. At trade, I am a Front 
                                        End Developer, Graphic Design and an expat.</span> 
                                    </div>
                                    <div className="about-copy-2 copy-primary">
                                        <span>I approach each new project as I do with any new 
                                        venture in life: with humility and an attitude that there 
                                        is always something to learn.</span>
                                    </div>
                                </div>
                            </Container>
                    <LeftLinksContent />
                    <RightLinksContent />
                </Container>
            </div>
        </Container>
    )
}


	
