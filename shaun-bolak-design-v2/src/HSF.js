import React from 'react';
import Container from 'react-bootstrap/Container';
import HSFSiteImage from './assets/hsf-site-img2.jpg';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const HSF = () => {
    return (
        <div id="hsfContainer">

            <div className="hsf-page-wrapper">

                <div className="hsf-hero-banner">
                    <div className="hsf-hero-content">
                        <span className="hsf-hero-title">
                            Making the world better 
                        </span>
                        <span className="hsf-hero-title">
                            - one job at a time.
                        </span>
                        <span className="hsf-hero-copy">
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
                
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </div>
    )
}
