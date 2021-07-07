import React from 'react';
import Container from 'react-bootstrap/Container';
import ContactTitle from './assets/contact-title.svg';
import { LeftLinksContent } from './components/LeftSideBarContent';
import { RightLinksContent } from './components/RightSideBarContent';

export const Contact = () => {
    return (
        <Container fluid className="Contact-container">

            <div className="Contact-page-wrapper">

                <Container>
                        <div className="design-title contact-title">
                            <div className="contact-title-wrapper">
                                <img
                                    src={ ContactTitle }
                                    className="contact-title-svg"
                                    alt="Contact"
                                />
                            </div>
                        </div>
                </Container>

                <Container>
                    {/* header image */}
                    <div className="contact-header"></div>
                    {/* /header image */}

                    {/* <!-- content--> */}
                    <div className="contact-container">
                        <div className="contact-copy">
                            <span className="contact-body slide">
                                Hello.
                            </span>
                            <span className="contact-body slide"> 
                                Is it me
                            </span>
                            <span className="contact-body slide"> 
                                your looking 
                            </span>
                            <span className="contact-body slide"> 
                                for?
                            </span>
                        </div>

                        <div className="contact-form">
                            <form action="/action_page.php" method="get" id="form1">
                                <input className="fade" type="text" id="name" name="name" placeholder="Name"/>
                                <input className="fade" type="email" id="email" name="email" placeholder="Email"></input>
                                <label className="subject fade" htmlFor="subject">Message</label>
                                <textarea id="subject" className="fade" name="subject"></textarea>
                                <button className="btns fade" type="submit" value="Submit" form="form1">Submit</button>
                            </form>
                        </div>

                    </div>

                    {/*- /content */}

                    {/* footer image */}
                    <div className="contact-footer"></div>
                    {/* /footer image */}

                </Container>
                
            </div>
            <LeftLinksContent />
            <RightLinksContent />
        </Container>
    )
}