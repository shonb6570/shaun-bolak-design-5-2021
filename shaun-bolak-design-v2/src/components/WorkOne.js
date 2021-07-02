import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import HSFLogo from '../assets/HSF-logo.png';
import { Link } from 'react-router-dom';


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
                                        <Badge pill id="badgeFont" className="mr-2 mt-2 mb-1">Brand Identity</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">Wireframe</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">Custom WP Theme</Badge>
                                        <Badge pill id="badgeFont" className="mb-2">Logo Design</Badge>
                                    </h3>
                                    <Link to="/hsf" className="work-link"><button className="btns">View Project</button></Link>
                                </div>
                            </div>
                        {/* <!-- /first project (user database)--> */}

                    </Container>
    )
}