import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import HSFLogo from '../assets/HSF-logo.png';


export const WorkOne = () => {
    return (
                    <Container className="project-examples work-one mb-5">
                        {/* <!-- first project (user database) --> */}
                            <div className="d-flex flex-wrap align-items-center">
     
                                <div id="HSF">
                                    {/* <!-- SVG logo --> */}
                                    <img alt="HSF logo" src={ HSFLogo } className="hsf-logo"/>
                                    {/* <!-- /SVG logo --> */}
                                    <h3 className="sub-heading">
                                        <Badge pill id="badgeFont" className="mr-2 mt-2 mb-1">3rd party API</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">JS Plugins</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">JavaScript</Badge>
                                        <Badge pill id="badgeFont" className="mb-2">SVG Animation</Badge>
                                    </h3>
                                    <button className="btns">View Project</button>
                                </div>
                            </div>
                        {/* <!-- /first project (user database)--> */}

                    </Container>
    )
}