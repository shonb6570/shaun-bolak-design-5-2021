import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavigationBar } from './components/Navigation';
import CLGraphicOne from './assets/cl-graphic-1.png';
import CLGraphicTwo from './assets/cl-graphic-2.png';
import CLGraphicThree from './assets/cl-graphic-3.png';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';


export const CaribLib = () => {
    return (
        <div id="waContainer">
        <NavigationBar />

            <div>
                {/* hero/landing page */}
                <div className="cl-hero-banner">
                    <div className="cl-hero-content work-hero-content">
                        <span className="cl-hero-title">
                            A Library with a past...
                        </span>
                        <span className="cl-hero-copy work-copy">
                            Or, rather, one that knows yours.  The Caribbean Genealogy Library is 
                            a non-profit that is devoted to keeping the past alive, as well as detailed records of the lineage 
                            of those from the Caribbean - from the Dutch West Indies to today!  I created 
                            graphics for the library that represent the students in the area, in order to 
                            spark their interest in learning about their history. 
                        </span>
                        <div className="work-info">
                            <div className="info-left">
                                <span className="info-heading">Year</span>
                                <span className="info-item">2020</span>
                            </div>
                            <div className="info-right">
                                <span className="info-heading">Front End Development</span>
                                <span className="info-item">Graphic Design</span>
                                <span className="info-item">Wire Frames</span>
                                <span className="info-item">Wordpress Themes</span>
                            </div>
                        </div>
                        <div className="cl-hero-banner-link-container">
                            <a className="cl-hero-banner-link" rel="noreferrer" target="_blank" href="https://cgl.vi/">www.cgl.vi</a>
                        </div>
                    </div>
                </div>
                {/* /hero/landing page */}

                {/* page content */}
                <Container className="text-left cl-section-one" fluid="true">
                    <div className="section-content content-one-wrapper">
                        <div className="content-one">
                            <div className="work-title-wrapper">
                                <span className="work-title">
                                    Hey, Mom!  
                                </span>
                                <span className="work-title">
                                    Look! that's me! 
                                </span>
                            </div>    
                            <span  className="work-copy">
                                Sophia, who runs the Library provided me with photos of artifacts, 
                                like the jade frog that appears in the third graphic.  But, more importantly, 
                                of photos of students in the area.  The goal was to create graphics that would 
                                represent the demographic of students in the area, and make them want to visit 
                                the library and learn.  And, according to Sophia's excitement when I delivered 
                                these graphics, it seems like it was an absolute success.
                            </span> 
                       </div>
                    </div>
                </Container>

                <Container id="cl-graphics-container" fluid="true">
                    {/* WriterAccess images */}
                    <Container className="text-center" id="cl-graphics-img-wrapper">
                        <img
                            src={ CLGraphicOne }
                            className="cl-img"
                            alt="writer Access design example"
                        />

                        <img
                            src={ CLGraphicTwo }
                            className="cl-img"
                            alt="writer Access design example"
                        />

                        <img
                            src={ CLGraphicThree }
                            className="cl-img"
                            alt="writer Access design example"
                        />

                    </Container>

                    {/* /WriterAccess images */}
                </Container>

                <Container className="cl-section-three text-center"  fluid="true">
                </Container>
                {/* /page content */}
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </div>
    )
}
