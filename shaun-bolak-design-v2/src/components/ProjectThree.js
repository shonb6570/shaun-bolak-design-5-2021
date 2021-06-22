import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import dynamicGif from '../video/dynamic.mp4';


export const ProjectThree = () => {
    return (
    <Container className="project-examples">
        {/* <!-- third project (dynamicAnalytics) --> */} 

        <div className="d-flex flex-wrap align-items-center">
            <div className="d-flex flex-lg-row flex-wrap align-items-md-center">
                <div className="dataAnalytics hov" id="dataAnalyticsGif">
                    <div className="text-center text-xl-right gif-container">
                        <video className="gif" autoPlay muted loop>
                            <source src={dynamicGif} type="video/mp4" /> ;     
                        </video>
                        {/* <!-- overlay links --> */}
                        <div className="overlay text-center">
                            <div className="link-container">
                                <a href="links/dynamicAnalytics/index.html" target="_blank">
                                    <p className="project-links">See it Live</p>
                                </a>

                                <hr className="linkHR" />

                                <a
                                    href="https://github.com/shonb6570/DynamicAnalytics"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <p className="project-links">View Code</p>
                                </a>
                            </div>
                        </div>
                        {/* <!-- /overlay links --> */}
                    </div>
                </div>

                <div className="dataAnalytics" id="dataAnalyticsCopy">
                    <h1 className="mt-4 title">dynamicAnalytics</h1>
                    <h3 className="sub-heading">
                        Detailed User Data Analytics <br />
                        <Badge pill variant="warning" id="badgeFont" className="mr-2 mt-4 mb-1">JS Plugins</Badge>
                        <Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">JavaScript</Badge>
                        <Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">Fetch</Badge>
                        <Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">CSS Grid</Badge>
                        <Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">SVG Graphics</Badge>
                        <Badge pill variant="warning" id="badgeFont" className="mb-2">Sass</Badge>
                    </h3>
                    <p className="project-copy">
                        An interactive dashboard data analytics example using advanced
                        web techniques including SVG animation, logo design and
                        JavaScript. This project involved creating and displaying
                        tables, charts, graphics and other user interface components to
                        show user activity data.
                    </p>
                </div>
            </div>
        </div>

        {/* third project (dynamicAnalytics) */}

        </Container>
    )
}