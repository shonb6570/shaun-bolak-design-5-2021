import React from 'react';
import Container from 'react-bootstrap/Container';
import HSFSiteImage from './assets/hsf-site-img2.jpg';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const HSF = () => {
    return (
        <div id="hsfContainer">

            <div className="hsf-page-wrapper">
                {/* hero/landing page */}
                <div className="hsf-hero-banner">
                    <div className="hsf-hero-content">
                        <span className="hsf-hero-title">
                            Making the world better 
                        </span>
                        <span className="hsf-hero-title">
                            - one job at a time.
                        </span>
                        <span className="hsf-hero-copy hsf-copy">
                            I helped Massachussets-based HSF find their 
                            identity with a logo and site that represents 
                            who are as a brand, and the values they 
                            represent as a non-profit. 
                        </span>
                        <div className="work-info">
                            <div className="info-left">
                                <span className="info-heading">Year</span>
                                <span className="info-item">2020</span>
                            </div>
                            <div className="info-right">
                                <span className="info-heading">Deliverables</span>
                                <span className="info-item">Brand Identity</span>
                                <span className="info-item">Wireframe</span>
                                <span className="info-item">Custom WP Theme</span>
                                <span className="info-item">Logo Design</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /hero/landing page */}

                {/* page content */}
                <Container className="text-left hsf-section-one" fluid="true">
                    <div className="hsf-section-content">
                        <div className="hsf-title-wrapper">
                            <span className="hsf-title">
                                New logo, 
                            </span>
                            <span className="hsf-title">
                                new life.
                            </span>
                        </div>    
                       <span  className="hsf-copy">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat.
                       </span> 
                    </div>
                    <div>
                        <div>
                            {/* logo abreviated */}
                            {/* /logo abreviated */}
                        </div>
                        <div>
                            {/* logo full */}
                            {/* /logo full */}
                        </div>
                    </div>
                </Container>
                <Container className="text-left hsf-section-two" fluid="true">
                    <div className="hsf-section-content">
                        <div className="hsf-title-wrapper">
                            <span className="hsf-title">
                            Fresh colors,
                            </span>
                            <span className="hsf-title">
                                modern design.
                            </span>
                        </div> 
                        <span  className="hsf-copy">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea 
                            commodo consequat.
                        </span>
                    </div>
                </Container>

                <Container>
                    {/* hsf image */}
                    <div className="text-center" id="hsf-site-img-wrapper">
                        <img
                            src={ HSFSiteImage }
                            className="hsf-site-img"
                            alt="hsf site design"
                        />
                    </div>

                    {/* /hsf image */}
                </Container>
                <Container className="text-left hsf-section-three" fluid="true">
                <div className="hsf-section-content">
                        <div className="hsf-title-wrapper">
                            <span className="hsf-title">
                                Typography
                            </span>
                        </div> 
                            <div>
                                <span className="info-heading">
                                    headline - fira code
                                </span>
                            </div>
                            <div>
                                <span  className="hsf-typography-headline fira-code">
                                    If we live forever,let us 
                                    live forever tonight.
                                </span>
                            </div>
  

                            <div className="hsf-typography-body fira-code">
                                <div className="light-underline">
                                    <span>ABCDEFGHIJKLMN</span>
                                    <span className="typography-spacer">a</span>
                                    <span>bcdefghiklmn</span>
                                </div>
                                <div className="light-underline">
                                    <span>OPQRSTUVWXYZ</span>
                                    <span className="typography-spacer">o</span>
                                    <span>pqrstuvwxyz</span>
                                </div>
                            </div>
                            <div>
                                <span className="hsf-typography-body fira-code">0123456789-_&%$!"*</span>
                            </div>
                    </div>
                </Container>
                <div className="hsf-section-four">
                    <div className="hsf-typography-xlg fira-code">
                        <span>@#&</span>
                    </div>
                    <div className="hsf-typography-small">
                        <div>
                            <span className="info-heading mt-3">
                                headline - fira code
                            </span>
                        </div>
                        <div className="hsf-typography-small-copy heebo mt-3">
                            <span>
                                Memories and mountain tops. Drunk on Sunset Boulevard.
                                With the city of angels singing on. Maybe this is just a dream.
                                And maybe we are still asleep. But I, I will miss you when I'm gone.
                            </span>
                        </div>
                        <div className="hsf-typography-small-copy heebo mt-3">
                            <span>
                                ABCDEFGHIJKLMN
                            </span>
                        </div>
                        <div className="hsf-typography-small-copy heebo">
                            <span>
                                OPQRSTUVWXYZ
                            </span>
                        </div>
                        <div className="hsf-typography-small-copy heebo mt-3">
                            <span>
                                abcdefghijklmn
                            </span>
                        </div>
                        <div className="hsf-typography-small-copy heebo">
                            <span>
                                opqrstuvwxyz
                            </span>
                        </div>
                        <div className="hsf-typography-small-copy heebo mt-3">
                            <span>
                                0123456789-_&%$!"*
                            </span>
                        </div>
                    </div>
                </div>
                {/* /page content */}
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </div>
    )
}
