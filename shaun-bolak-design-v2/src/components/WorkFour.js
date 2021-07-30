import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import CarribeanLogo from '../assets/library-logo.png'
import { Link } from 'react-router-dom';

export const WorkFour = () => {
    return (
                    <Container className="project-examples work-four">
                        {/* <!-- first project (user database) --> */}
                            <div className="d-flex flex-wrap align-items-center">

                                <div id="carribeanGen">
                                    {/* <!-- SVG logo --> */}
                                    <img alt="Carribean Geneology Library logo" src={ CarribeanLogo } className="library-logo"/>
                                    {/* <!-- /SVG logo --> */}
                                    <h3 className="sub-heading">
                                        <Badge pill id="badgeFont" className="mr-2 mb-1 cl-badge-one">Graphic Design</Badge>
                                        <Badge pill id="badgeFont" className="mr-2 mb-1">Vector Graphics</Badge>
                                    </h3>
                                    <Link to="/caribbean-library" className="work-link"><button className="btns">View Project</button></Link>
                                </div>
                            </div>
                        {/* <!-- /first project (user database)--> */}

                    </Container>
    )
}