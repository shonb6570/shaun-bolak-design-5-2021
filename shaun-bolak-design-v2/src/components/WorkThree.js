import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import WriterAccessLogo from '../assets/wa-logo.png'


export const WorkThree = () => {
    return (
                    <Container className="project-examples work-projects">
                        {/* <!-- first project (user database) --> */}
                            <div className="d-flex flex-wrap align-items-center">
                                <div className="hov">


                                        {/* <!-- overlay links --> */}
                                            <div className="overlay text-center">
                                                <div className="link-container">
                                                    <a href="./links/awesomeCo/index.html" target="_blank">
                                                        <p className="project-links">See it Live</p>
                                                    </a>

                                                    <hr className="linkHR" />

                                                    <a
                                                        href="https://github.com/shonb6570/AwesomeCo"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <p className="project-links">View Code</p>
                                                    </a>
                                                </div>
                                            </div>
                                        {/* <!-- /overlay links --> */}
                                        
                                    
                                </div>

                                <div id="HSF">
                                    {/* <!-- SVG logo --> */}
                                    <img alt="writeraccess logo" src={ WriterAccessLogo } className="writer-access-logo"/>
                                    {/* <!-- /SVG logo --> */}
                                    <h3 className="sub-heading">
                                        <span className="work-heading">Lorem Ipsem</span> <br />
                                        <Badge pill id="badgeFont" className="mr-2 mt-4 mb-1">3rd party API</Badge>
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