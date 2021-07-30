import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavigationBar } from './components/Navigation';
import designTitle from './assets/design-title.svg';
import { ProjectOne } from './components/ProjectOne';
import { ProjectTwo } from './components/ProjectTwo';
import { ProjectThree } from './components/ProjectThree';
import { ProjectFour } from './components/ProjectFour';
import { ProjectFive } from './components/ProjectFive';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const Design = () => {
    return (
        <Container fluid className="design-container">
            <NavigationBar />
            <div className="design-page-wrapper">

                <Container>
                        <div className="design-title">
                            <img
                                src={ designTitle }
                                className="design-title-svg"
                                alt="Design"
                            />
                        </div>
                </Container>

                <Container fluid>

                    {/* <!-- PROJECTS SECTION --> */}
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                    <ProjectFour />
                    <ProjectFive />

                    {/* /PROJECTS section */}

                </Container>
                
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </Container>
    )
}


	
