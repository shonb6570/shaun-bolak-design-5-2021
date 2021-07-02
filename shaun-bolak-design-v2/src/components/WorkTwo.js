import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import FourHireLogo from '../assets/four-hire-logo.svg';
import { Link } from 'react-router-dom';


export const WorkTwo = () => {
    return (
                    <Container className="project-examples work-two mb-5">
                        {/* <!-- first project (user database) --> */}
                            <div className="d-flex flex-wrap align-items-center">
                                <div id="fourHire">
                                    {/* <!-- SVG logo --> */}
                                    <img alt="4Hire logo" src={ FourHireLogo } className="four-hire-logo"/>
                                    {/* <!-- /SVG logo --> */}
                                    <h3 className="sub-heading">
                                        <Badge pill id="badgeFont" className="mr-2 mt-2 mb-1">Brand Identity</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">Wireframe</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">Logo Design</Badge>
                                        <Badge pill id="badgeFont" className="mb-2">UX/UI</Badge>
                                    </h3>
                                    <Link to="/fourhire" className="work-link"><button className="btns">View Project</button></Link>
                                </div>
                            </div>
                        {/* <!-- /first project (user database)--> */}

                    </Container>
    )
}