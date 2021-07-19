import React from 'react';
import Container from 'react-bootstrap/Container';
import WABadgeOne from './assets/wa-badge-one.png';
import WABadgeTwo from './assets/wa-badge-two.png';
import WABadgeThree from './assets/wa-badge-three.png';
import WABadgeFour from './assets/wa-badge-four.png';
import WABadgeFive from './assets/wa-badge-five.png';
import WAGraphicOne from './assets/wa-graphic-one.png';
import WAGraphicTwo from './assets/wa-graphic-two.png';
import WAGraphicThree from './assets/wa-graphic-three.png';
import WALargeImageOne from './assets/wa-badges.png';
import WALargeImageTwo from './assets/writer-access-icons.png';
import WALargeImageThree from './assets/wa-iteration-1.png';
import WALargeImageFour from './assets/wa-iteration-2.png';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';


export const WriterAccess = () => {
    return (
        <div id="hsfContainer">

            <div className="hsf-page-wrapper">
                {/* hero/landing page */}
                <div className="wa-hero-banner">
                    <div className="wa-hero-content work-hero-content">
                        <span className="hsf-hero-title">
                            The Content Management Masters
                        </span>
                        <span className="hsf-hero-copy work-copy">
                            WriterAccess is a Talent Access site, that caters to finding the right professional 
                            to create your content.  From writers, designers, translators to you name it - 
                            they have a formidable talent pool of the best of the best.  I helped them with 
                            creating graphics, assets, wire frames and front end WordPress Development.  
                        </span>
                        <div className="work-info">
                            <div className="info-left">
                                <span className="info-heading">Year</span>
                                <span className="info-item">2020-2021</span>
                            </div>
                            <div className="info-right">
                                <span className="info-heading">Front End Development</span>
                                <span className="info-item">Graphic Design</span>
                                <span className="info-item">Wire Frames</span>
                                <span className="info-item">Wordpress Themes</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /hero/landing page */}

                {/* page content */}
                <Container className="text-left wa-section-one" fluid="true">
                    <div className="section-content content-one-wrapper">
                        <div className="content-one">
                            <div className="work-title-wrapper">
                                <span className="work-title">
                                    You Get a badge,  
                                </span>
                                <span className="work-title">
                                    And You Get a badge 
                                </span>
                            </div>    
                            <span  className="work-copy">
                                Amongst other assets, I created many, many badge designs for 
                                the various achievements that each talent may receive.  Although, 
                                repetitive, and somewhat tedious at times, I thoroughly enjoyed the process.
                            </span> 
                       </div>
                        <div className="wa-badges-container">
                            <div className="content-one">
                                    <img
                                        src={ WABadgeOne }
                                        className="wa-badge"
                                        alt="writer access badge design example"
                                    />

                                    <img
                                        src={ WABadgeTwo }
                                        className="wa-badge"
                                        alt="writer access badge design example"
                                    />

                                    <img
                                        src={ WABadgeThree }
                                        className="wa-badge"
                                        alt="writer access badge design example"
                                    />

                                    <img
                                        src={ WABadgeFour }
                                        className="wa-badge"
                                        alt="writer access badge design example"
                                    />

                                    <img
                                        src={ WABadgeFive }
                                        className="wa-badge"
                                        alt="writer access badge design example"
                                    />
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="text-left wa-section-two" fluid="true">
                    <div className="section-content">
                        <div className="content-two">
                            <div className="work-title-wrapper">
                                <span className="work-title">
                                    New Graphics for 
                                </span>
                                <span className="work-title">
                                    an Established Brand
                                </span>
                            </div> 
                            <span  className="work-copy">
                                As the examples below will show, I re-designed and created numerous banner assets.  
                                Each graphic is modern, yet light-hearted  -  all of which adhere to the existing brand style.
                            </span>
                        </div>
                        <Container className="wa-graphics-container">
                                    <img
                                        src={ WAGraphicOne }
                                        className="wa-graphic"
                                        alt="writer access banner design example"
                                    />

                                    <img
                                        src={ WAGraphicTwo }
                                        className="wa-graphic"
                                        alt="writer access banner design example"
                                    />

                                    <img
                                        src={ WAGraphicThree }
                                        className="wa-graphic"
                                        alt="writer access banner design example"
                                    />
                        </Container>
                    </div>
                </Container>

                <Container id="wa-site-img-container" fluid="true">
                    {/* WriterAccess images */}
                    <Container className="text-center" id="wa-site-img-wrapper">
                        <img
                            src={ WALargeImageOne }
                            className="wa-lg-img"
                            alt="writer Access design example"
                        />

                        <img
                            src={ WALargeImageTwo }
                            className="wa-lg-img"
                            alt="writer Access design example"
                        />

                        <img
                            src={ WALargeImageThree }
                            className="wa-lg-img"
                            alt="writer Access design example"
                        />

                        <img
                            src={ WALargeImageFour }
                            className="wa-lg-img"
                            alt="writer Access design example"
                        />
                    </Container>

                    {/* /WriterAccess images */}
                </Container>

                <Container className="wa-section-three" fluid="true">
                </Container>
                {/* /page content */}
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </div>
    )
}
