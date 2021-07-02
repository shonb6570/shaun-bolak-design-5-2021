import React from 'react';
import Container from 'react-bootstrap/Container';
import FourHireHomeImage from './assets/fourhire-home.jpg';
import FourHireContentImage from './assets/fourhire-content.jpg';
import FourHireLogo from './assets/four-hire-logo.png';
import GradientOne from './assets/gradient1.png';
import GradientTwo from './assets/gradient2.png';
import GradientThree from './assets/gradient3.png';
import GradientFour from './assets/gradient4.png';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const FourHire = () => {
    return (
        <div id="hsfContainer">

            <div className="hsf-page-wrapper">
                {/* hero/landing page */}
                <div className="four-hire-hero-banner">
                    <div className="work-hero-content">
                        <span className="hsf-hero-title">
                            Not your ordinary 
                        </span>
                        <span className="hsf-hero-title">
                            job search site.
                        </span>
                        <span className="hsf-hero-copy work-copy">
                            I partnered with the talented Aaron Robinson from DatDesDEv
                            to create a brand identity, site design and style guide for 
                            4Hire (the folks behind NannyLane).  The site is still in pre-production. 
                        </span>
                        <div className="work-info">
                            <div className="info-left">
                                <span className="info-heading">Year</span>
                                <span className="info-item">2021</span>
                            </div>
                            <div className="info-right">
                                <span className="info-heading">Deliverables</span>
                                <span className="info-item">Brand Identity</span>
                                <span className="info-item">Wireframe</span>
                                <span className="info-item">Logo Design</span>
                                <span className="info-item">UX/UI</span>
                            </div>
                        </div>

                    </div>
                </div>
                {/* /hero/landing page */}

                {/* page content */}
                <Container className="text-left hsf-section-one" fluid="true">
                    <div className="section-content content-one-wrapper">
                        <div className="content-one">
                            <div className="work-title-wrapper">
                                <span className="work-title">
                                    Oh, those gradients! 
                                </span>
                            </div>    
                            <span  className="work-copy">
                                The folks at 4Hire wanted simply had blue gradient 
                                that they wanted incorporated into the logo.  Building 
                                on that, the darkening shades of blue gradients became a 
                                symbol of 4Hire branding ( and a knockout logo! ).
                            </span> 
                       </div>
                        <div className="four-hire-gradients-container">

                            <div className="four-hire-content-one">
                                    <img
                                        src={ FourHireLogo }
                                        className="four-hire-logo-style-guide"
                                        alt="4hire logo"
                                    />
                            </div>

                            <div className="four-hire-content-one">
                                    <img
                                        src={ GradientOne }
                                        className="four-hire-gradient"
                                        alt="gradient light example"
                                    />
                            </div>

                            <div className="four-hire-content-one">
                                    <img
                                        src={ GradientTwo }
                                        className="four-hire-gradient"
                                        alt="gradient dark example"
                                    />
                            </div>

                            <div className="four-hire-content-one">
                                    <img
                                        src={ GradientThree }
                                        className="four-hire-gradient"
                                        alt="gradient darker example"
                                    />
                            </div>

                            <div className="four-hire-content-one">
                                    <img
                                        src={ GradientFour }
                                        className="four-hire-gradient"
                                        alt="gradient darkest example"
                                    />
                            </div>

                        </div>
                    </div>
                </Container>
                <Container className="text-left four-hire-section-two" fluid="true">
                    <div className="section-content">
                        <div className="content-two">
                            <div className="work-title-wrapper">
                                <span className="work-title">
                                    Fresh colors,
                                </span>
                                <span className="work-title">
                                    modern design.
                                </span>
                            </div> 
                            <span  className="work-copy">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea 
                                commodo consequat.
                            </span>
                        </div>
                    </div>
                </Container>

                <Container className="four-hire-imgs-container">
                    {/* 4hire site images */}
                    <div className="text-center" id="four-hire-home-img-wrapper">
                        <img
                            src={ FourHireHomeImage  }
                            className="four-hire-home-img"
                            alt="4Hire home page site design"
                        />
                    </div>

                    <div className="text-center" id="four-hire-content-img-wrapper">
                        <img
                            src={ FourHireContentImage  }
                            className="four-hire-content-img"
                            alt="4Hire content page site design"
                        />
                    </div>

                    {/* /4hire site images */}
                </Container>
                <Container className="text-left four-hire-section-three" fluid="true">
                <div className="section-content">
                        <div className="content-three">
                            <div className="work-title-wrapper">
                                <span className="work-title">
                                    Typography
                                </span>
                            </div> 
                                <div className="info-heading">
                                    <span>
                                        headline - fira code
                                    </span>
                                </div>
                                <div className="typography-headline fira-code">
                                    <span>
                                    I can feel it coming in the air tonight, Oh lord.
                                    I've been waiting for this moment for all my life.
                                    </span>
                                </div>
    

                                <div className="typography-body fira-code">
                                    <div className="light-underline">
                                        <span>ABCDEFGHIJKLMN</span>
                                        <span className="typography-spacer">a</span>
                                        <span>bcdefghiklmn</span>
                                    </div>
                                    <div className="light-underline">
                                        <span>OPQRSTUVWXYZ</span>
                                        <span className="typography-spacer-two">o</span>
                                        <span>pqrstuvwxyz</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="typography-body fira-code">0123456789-_&%$!"*</span>
                                </div>
                            </div>
                    </div>
                </Container>
                <div className="hsf-section-four">
                    <div className="typography-xlg">
                        <svg className="typography-xlg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1463.19 575.86">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_16" data-name="Layer 16">
                                    <path className="typography-xlg-svg-path" d="M392.51,543.22c-44.88,23.66-90.58,32.64-145.25,32.64C113.43,575.86,0,477.93,0,321.25,0,153.15,116.69,7.89,297.85,7.89c142,0,237.47,99.56,237.47,235.84C535.32,366.14,466.77,438,390.07,438c-32.65,0-62.84-22-60.39-71.81h-3.26C297.85,414.28,260.31,438,211.35,438c-47.33,0-88.13-38.36-88.13-102.83,0-101.18,80-193.4,193.4-193.4,35.09,0,66.1,7.35,87.32,17.14L376.19,306.57c-12.24,62-2.45,90.58,24.49,91.39,41.61.82,88.13-54.68,88.13-149.33,0-118.33-71-203.2-197.48-203.2-133,0-244.82,105.27-244.82,270.93,0,136.27,89,220.33,209.73,220.33,46.51,0,89.76-9.79,123.22-28.56ZM347.63,190.69a140.91,140.91,0,0,0-40.8-5.72C235,185,177.08,252.71,177.08,331.86c0,35.91,17.95,62,53.86,62,47.33,0,90.58-60.39,99.56-111Z"/>
                                    <path className="typography-xlg-svg-path" d="M642.25,559l21.21-159.94H596.55V350.9h74.26l15.5-118.33H616.13V184.43h77.53L714.87,28.56H762.2L741.8,184.43h84.87L847.89,28.56H896l-20.4,155.87h66.92v48.14H868.29L853.6,350.9h70.18v48.15H846.26L825,559h-49l21.21-159.94H712.43L691.21,559ZM804.64,350.9l15.5-118.33H735.27L719.77,350.9Z"/>
                                    <path className="typography-xlg-svg-path" d="M1378.32,559c-15.5-15.5-30.19-31-51.41-53.86C1279.58,549.19,1226.54,568,1166.15,568c-106.9,0-168.92-71.81-168.92-154.22,0-75.08,44.88-126.49,107.72-160.77v-2.44c-28.56-35.91-45.7-75.9-45.7-115.07C1059.25,68.55,1107.4,0,1198.79,0c68.55,0,121.6,45.7,121.6,116.69,0,57.94-33.46,103.64-120.78,146.89V266c46.51,53.86,98.74,114.25,133.83,153.42,25.3-38.36,42.44-91.4,53-160.76h65.29c-14.69,86.5-38.36,155.05-79.16,203.19,29.38,31,57.94,62,90.58,97.11Zm-86.5-94.66c-32.64-35.91-93.84-102.82-155-173-29.38,18.77-71,53.86-71,111.79,0,62.84,46.51,111,112.61,111A153.68,153.68,0,0,0,1291.82,464.33ZM1124.54,128.94c0,39.17,18,69.36,41.61,98.74,55.5-31.83,91.4-61.21,91.4-107.72,0-33.46-18.77-71-63.65-71C1148.2,49,1124.54,86.5,1124.54,128.94Z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="typography-small-wrapper">
                        <div className="typography-small">
                            <span className="info-heading info-heading-heebo mt-3">
                                headline - fira code
                            </span>
                        </div>
                        <div className="typography-small-copy heebo mt-3">
                            <span>
                                Well I remember, I remember don't worry.
                                How could I ever forget?
                                It's the first time, the last time we ever met.
                                But I know the reason why you keep this silence up.
                                No you don't fool me.
                                The hurt doesn't show, but the pain still grows.
                                It's no stranger to you and me.
                            </span>
                        </div>
                        <div className="typography-small-copy heebo mt-3">
                            <span>
                                ABCDEFGHIJKLMN
                            </span>
                        </div>
                        <div className="typography-small-copy heebo">
                            <span>
                                OPQRSTUVWXYZ
                            </span>
                        </div>
                        <div className="typography-small-copy heebo mt-3">
                            <span>
                                abcdefghijklmn
                            </span>
                        </div>
                        <div className="typography-small-copy heebo">
                            <span>
                                opqrstuvwxyz
                            </span>
                        </div>
                        <div className="typography-small-copy heebo mt-3">
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
