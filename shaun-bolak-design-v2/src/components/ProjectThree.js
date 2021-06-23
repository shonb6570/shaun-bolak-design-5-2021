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
                                <a href="./links/dynamicAnalytics/index.html" target="_blank">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.19 49.47" id="dynamicLogo">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class="dynamic-1" d="M27.7,22.93V7.38a.64.64,0,0,1,.64-.64h6.17a.64.64,0,0,1,.63.64V23.6a.21.21,0,0,1-.34.17L31,20.29a.23.23,0,0,0-.28,0l-2.67,2.77A.21.21,0,0,1,27.7,22.93Z"/>
                            <path class="dynamic-2" d="M25.73,25l-6.09,6.41a.46.46,0,0,1-.72,0l-.77-1a.46.46,0,0,1-.11-.3V14.74a.46.46,0,0,1,.46-.47h6.86a.47.47,0,0,1,.46.47v10A.44.44,0,0,1,25.73,25Z"/>
                            <path class="dynamic-3" d="M15.94,28.88,9.87,34.53A.69.69,0,0,1,8.71,34V6.89a.68.68,0,0,1,.69-.68h6.07a.67.67,0,0,1,.68.68V28.38A.67.67,0,0,1,15.94,28.88Z"/>
                            <path class="dynamic-4" d="M6.54,37.14l-5,5.28A.9.9,0,0,1,0,41.76V20.14a.9.9,0,0,1,.9-.9h5a.9.9,0,0,1,.9.9V36.49A.91.91,0,0,1,6.54,37.14Z"/>
                            <path class="dynamic-5" d="M50.14,12.05l-4.43,5.07a.57.57,0,0,1-1-.4V3.05a.57.57,0,0,1,.57-.57h4.43a.58.58,0,0,1,.57.57v8.6A.59.59,0,0,1,50.14,12.05Z"/>
                            <path class="dynamic-6" d="M42.68,19.49,38,24.57a.57.57,0,0,1-1-.4V.57A.57.57,0,0,1,37.6,0h4.67a.58.58,0,0,1,.58.57V19.09A.54.54,0,0,1,42.68,19.49Z"/>
                            <path class="dynamic-2" d="M2.83,49.47h48c.06,0,.41-.35.41-1.51v-30s-.86-.31-1.35.2L38.21,30.2a.77.77,0,0,1-1.09,0L32.3,26.46a.78.78,0,0,0-1.17.13L20.93,37.2a.78.78,0,0,1-1.22.07L17.24,34.6a.78.78,0,0,0-1.11-.05L1.93,48.12C1.41,48.6,1.75,49.47,2.83,49.47Z"/>
                            <path class="dynamic-7" d="M8.82,45.46c0-1,.5-1.79,1.09-1.79s.83.42,1,1v-2.6H11v5.13h-.1v-1c-.17.62-.55,1-1,1S8.82,46.45,8.82,45.46Zm.1,0c0,.9.44,1.63,1,1.63s1-.73,1-1.63-.44-1.64-1-1.64S8.92,44.55,8.92,45.46Z"/>
                            <path class="dynamic-7" d="M12.6,47l.85-3.25v0h.11l0,.1-.9,3.43v0h0c-.29,1-.51,1.31-.93,1.31h0V48.4h0c.4,0,.58-.29.85-1.23l-.9-3.4,0-.1h.11v0Z"/>
                            <path class="dynamic-7" d="M16.17,47.17v.08h-.1V45.17c0-.74-.37-1.35-.85-1.35s-.85.61-.85,1.35v2.07h-.1V43.67h.1v.83c.16-.49.48-.83.85-.83.53,0,1,.67,1,1.5Z"/>
                            <path class="dynamic-7" d="M16.9,45.46c0-1,.47-1.79,1-1.79.39,0,.74.4.9,1v-1h.1v3.57h-.1v-1c-.16.6-.51,1-.9,1C17.37,47.24,16.9,46.45,16.9,45.46Zm.1,0c0,.9.42,1.63.94,1.63s.9-.73.9-1.63-.4-1.64-.9-1.64S17,44.55,17,45.46Z"/>
                            <path class="dynamic-7" d="M21.45,44.57c.11-.53.41-.9.76-.9s.82.6.82,1.38v2.2h-.09v-2.2c0-.69-.32-1.23-.72-1.23s-.71.54-.71,1.23v2.2h-.1V45.12h0v-.07c0-.69-.31-1.23-.71-1.23s-.72.54-.72,1.23v2.19h-.1V43.67H20v.71c.14-.43.41-.71.72-.71S21.34,44,21.45,44.57Z"/>
                            <path class="dynamic-7" d="M24.06,43h0v-.15h.1V43Zm0,.75v-.07h.1v3.57H24v-3.5Z"/>
                            <path class="dynamic-7" d="M26.8,46.45l.08.09a1,1,0,0,1-.9.7c-.6,0-1.09-.79-1.09-1.78s.49-1.79,1.09-1.79a1,1,0,0,1,.9.66l-.08.08a.91.91,0,0,0-.82-.59c-.55,0-1,.73-1,1.64s.44,1.63,1,1.63A.94.94,0,0,0,26.8,46.45Z"/>
                            <path class="dynamic-8" d="M27.78,47.09v0h-.11l0-.11,1.83-6.89a0,0,0,0,1,.08,0L31.3,47l0,.11h-.11v0l-1.54-6.36a.11.11,0,0,0-.22,0Z"/>
                            <path class="dynamic-8" d="M34,47.06v.08h-.1V45.06c0-.74-.37-1.35-.84-1.35s-.85.61-.85,1.35v2.08h-.1V43.56h.1v.83c.15-.49.47-.83.85-.83s.94.67.94,1.5Z"/>
                            <path class="dynamic-8" d="M34.87,45.35c0-1,.47-1.79,1-1.79.4,0,.74.41.9,1v-1h.1v3.58h-.1v-1c-.16.6-.5,1-.9,1C35.34,47.14,34.87,46.35,34.87,45.35Zm.1,0c0,.91.42,1.64.93,1.64s.9-.74.9-1.64-.4-1.64-.9-1.64S35,44.44,35,45.35Z"/>
                            <path class="dynamic-8" d="M38,42.08V42h.1v5.14H38V42.08Z"/>
                            <path class="dynamic-8" d="M39.89,46.86l.84-3.25,0,0h.1l0,.11-.9,3.42v0h0c-.29,1-.51,1.31-.94,1.31h0V48.3h0c.4,0,.59-.29.85-1.24l-.89-3.39,0-.11H39v0Z"/>
                            <path class="dynamic-8" d="M42,43.71V46.2c0,.52.27.79.71.79h.05v.15h-.05c-.52,0-.8-.34-.81-.94V43.71h-.44v-.15h.44v-.85H42v.85h.76v.15H42Z"/>
                            <path class="dynamic-8" d="M43.59,42.16h-.05V42h.11v.15h-.06Zm-.05,1.48v-.08h.1v3.58h-.1v-3.5Z"/>
                            <path class="dynamic-8" d="M46.48,46.35l.08.09a1,1,0,0,1-.9.7c-.59,0-1.08-.79-1.08-1.79s.49-1.79,1.08-1.79a1,1,0,0,1,.9.66l-.08.09a.89.89,0,0,0-.82-.6c-.54,0-1,.73-1,1.64s.44,1.64,1,1.64A1,1,0,0,0,46.48,46.35Z"/>
                            <path class="dynamic-8" d="M49,44.49h-.1a.74.74,0,1,0-1.47,0c0,.85,1.67.73,1.66,1.72a.93.93,0,1,1-1.85,0h.1a.83.83,0,0,0,1.65,0c0-.84-1.66-.71-1.66-1.72a.84.84,0,1,1,1.67,0Z"/>
                        </g>
                    </g>
                </svg>
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