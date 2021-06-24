import React from 'react';
import Container from 'react-bootstrap/Container';
import WorkTitle from './assets/work-title.svg';
import { WorkOne } from './components/WorkOne';
import { WorkTwo } from './components/WorkTwo';
import { WorkThree } from './components/WorkThree';
import { WorkFour } from './components/WorkFour';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const Work = () => {
    return (
        <Container fluid className="work-container">

            <div className="work-page-wrapper">

                <Container fluid>
                    <div className="work-header-bg"></div>
                </Container>

                <Container>
                        <div className="design-title">
                            <img
                                src={ WorkTitle }
                                className="work-title-svg"
                                alt="Work"
                            />
                        </div>
                </Container>

                <Container fluid>

                    {/* <!-- work examples SECTION --> */}
                    <WorkOne />
                    <WorkTwo />
                    <WorkThree />
                    <WorkFour />

                    {/*- work examples section */}

                </Container>
                
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </Container>
    )
}
