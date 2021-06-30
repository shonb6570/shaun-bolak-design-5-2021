import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import CarribeanLogo from '../assets/library-logo.png'


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