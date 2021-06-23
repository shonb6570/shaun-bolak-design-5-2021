import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import DrumSpaceGif from '../video/drumSpace.mp4';


export const ProjectTwo = () => {
    return (
        <Container className="project-examples">
            {/* <!-- second project (awesomeco) --> */} 

            <div className="d-flex flex-wrap align-items-center">
                <div className="d-flex flex-lg-row flex-wrap align-items-md-center">
                    <div className="drumSpace hov">
                    <div className="text-center text-xl-right gif-container">
                        <video className="gif" autoPlay muted loop>
                            <source src={DrumSpaceGif} type="video/mp4" /> ;     
                        </video>
                        {/* <!-- overlay links --> */}
                        <div className="overlay text-center">
                            <div className="link-container">
                                <a href="./links/drumSpace/index.html" target="_blank">
                                    <p className="project-links">See it Live</p>
                                </a>

                                <hr className="linkHR" />

                                <a
                                    href="https://github.com/shonb6570/DrumSpace"
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

                    <div className="drumSpace" id="drumSpaceCopy">
                        <svg
                            id="drumSpaceLogo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 153.1 27.04"
                        >
                            <g data-name="Layer 2">
                                <path
                                    fill="transparent"
                                    d="M36.74 27a2 2 0 01-1.54-.58 2.08 2.08 0 01-.52-1.42 5.15 5.15 0 01.66-2.45 12.22 12.22 0 011.72-2.44 17 17 0 012.06-2c.1-.78 0-1.28.09-2.4a27.39 27.39 0 01.93-6.14c.07-.28.69-1.67.91-1.67s.78 0 .2 1.72a29.41 29.41 0 00-1.11 6.16c0 .51-.1 1-.12 1.58l.51-.39c.14 0 .2.06.2.18v.05a.13.13 0 010 .07l-.73.58a27 27 0 00-.4 4.17c0 .12-.13.58-.28.58s-.22-.87-.22-1.09c0-1 0-1.17.08-3-.39.35-.72.68-1.32 1.31Q35 22.71 35 25a1.74 1.74 0 00.44 1.22 1.69 1.69 0 001.3.47c2.41 0 4.83-1.08 7.24-3.24a27.05 27.05 0 004.27-4.89 18.49 18.49 0 002.89-6.08 12.23 12.23 0 00.42-4.57 10.45 10.45 0 00-.66-3.59 4.06 4.06 0 00-1.22-1.78 3.7 3.7 0 00-2.24-.91 9.7 9.7 0 00-3.83 0A10.44 10.44 0 0040 3a17.35 17.35 0 00-2.81 2.32 17.71 17.71 0 00-2.82 3.58 9.13 9.13 0 00-1.18 4.32c0 .6.14 4.78-.86 4.75-.83 0-.09-7.63-.79-7.63-.25 0 .16 5.38-.74 5.36-1.22 0 .37-3.61-1-3.52-.72.06 0 2.65-1.18 2.65s-1.51-2.11-2.3-2.1c-.94 0-1.56 2.68-2.51 2.7s-.48-3.64-1.1-3.68c-.89-.06-.52 3.41-2 3.36-.72 0-.22-1.22-1-1.29s-.39 1.28-1.25 1.29c-.54 0-1.92-.92-3-.92-.83 0-2.73 1.35-3.57 1.25s-2.5-.84-3.22-.56c-2.17.85-7.5.43-7.53.43a6.3 6.3 0 01-.79 0 .87.87 0 01-.28-.1c-.17-.1 0-.31.13-.29.61.06 6.63.35 8.37-.38.92-.39 2.06.54 3.24.47 2.07-.11 1.66-1 3.76-1.16a22.1 22.1 0 003 .6c.66-.09.14-1.23 1.14-1.17.53 0 .69 1.41 1.22 1.33s.82-3.69 1.84-3.56c.58.08.78 3.7 1.22 3.64s1.17-2.31 2.14-2.22c.8.08 1.86 1.79 2.47 1.75.91-.08.29-3.25 1.57-3.25 1.44 0-.29 3.3.69 3.19.69-.07-.25-6.35.79-6.38s.69 8.17.87 8.18.18-2.78.41-4.18a6.83 6.83 0 01.95-2.61 19.58 19.58 0 013.07-4.05 18.81 18.81 0 014.61-3.36A12.85 12.85 0 0147.48.35a6.32 6.32 0 013 .66 4.76 4.76 0 012 2 6.91 6.91 0 01.73 3.34 19 19 0 01-1.21 6.3 27.27 27.27 0 01-3 6 25.87 25.87 0 01-4.37 5A11.86 11.86 0 0136.74 27zM55 17.83a.74.74 0 01-.85-.82 3.21 3.21 0 01.25-1.18 1.94 1.94 0 00.18-.78c-.07-.75-.88-.48-1-.65a.52.52 0 01-.1-.31.79.79 0 01.08-.26 5.06 5.06 0 01.92-1 1 1 0 01.61-.37.21.21 0 01.18.1.4.4 0 01.07.24.76.76 0 01-.11.37 5 5 0 01-.76.95c.06.17.45.11.54.25.26.29.15.56.15.77a3.7 3.7 0 01-.3.86 3.91 3.91 0 00-.21 1.1c0 .28.11.42.33.43a3.24 3.24 0 002-.6 8.63 8.63 0 002.27-2.22c.09-.15.34-.62.34-.62s.22-.08.22.06l-.4.86C56.92 17.63 56 17.77 55 17.83zm.12-5.06a1.25 1.25 0 00-.57.35c-.17.17-.54.49-.54.68a1.05 1.05 0 000 .13.34.34 0 00.1 0c.43-.05.65-.57.79-.78a1.17 1.17 0 00.24-.38z"
                                />
                                <path
                                    fill="transparent"
                                    d="M63.28 16.65c-.91 0-1.38-.53-1.41-1.58a5.3 5.3 0 010-.56 9.11 9.11 0 01-.82 1 1.22 1.22 0 01-.87.46 1 1 0 01-.73-.23.92.92 0 01-.17-.52 4.72 4.72 0 01.68-2 .24.24 0 01.24-.18c.19 0 .29.09.29.27v.08c-.39.89-.83 1.53-.78 1.92a.38.38 0 00.41.32 1.21 1.21 0 00.78-.37 6.43 6.43 0 001.27-1.67l.08-.15a2.09 2.09 0 01.13-.26.37.37 0 01.32-.11.28.28 0 01.2.26v.1a3.89 3.89 0 00-.37 1.71 1.66 1.66 0 00.22.83.66.66 0 00.59.36 4.18 4.18 0 001.62-.39 5.83 5.83 0 001.61-1.2 5 5 0 00.81-1.28c0-.05.2-.43.48-.27.08.05.2 0 .13.49a5.34 5.34 0 01-.74 1A7 7 0 0165.49 16a4 4 0 01-2.21.65z"
                                />
                                <path
                                    fill="transparent"
                                    d="M67.27 15.68l.32-.66c.76-1.54 1.42-2.32 2-2.32.38 0 .58.36.58 1a5.6 5.6 0 01-.26 1.59c.55-.89 1-1.33 1.47-1.33a.93.93 0 01.77.46 4.47 4.47 0 01.42.94 3.81 3.81 0 00.31.73.62.62 0 00.49.35 6.52 6.52 0 003-1.23c.7-.43 1.33-.85 1.89-1.27a.12.12 0 01.12.06.34.34 0 010 .17.23.23 0 000 .05.57.57 0 01-.17.12l-.35.24a14.59 14.59 0 01-1.34.92 6.51 6.51 0 01-3.07 1.23 1.21 1.21 0 01-1.18-.6 4.63 4.63 0 01-.54-1.13 3.48 3.48 0 00-.16-.53c-.06-.13-.14-.19-.24-.19-.43 0-1 .66-1.79 2-.05.12-.12.18-.2.18a.28.28 0 01-.2-.13.46.46 0 01-.09-.27.82.82 0 01.08-.31 9.32 9.32 0 00.61-2.42c0-.19-.07-.29-.2-.29s-.54.22-.85.65a10 10 0 00-.88 1.51c-.28.57-.51 1.08-.7 1.52a5.75 5.75 0 00-.28.74c0 .13-.12.19-.2.19s-.17-.12-.18-.37c.07-.53.19-1.19.37-2s.35-1.39.5-1.84c.11-.2.24-.31.37-.31a.3.3 0 01.28.34.46.46 0 010 .19 17.2 17.2 0 00-.7 2.02z"
                                />
                                <path
                                    fill="transparent"
                                    d="M76 24.66a5.16 5.16 0 01-1.7-.3 1 1 0 01-.74-1q.27-1.87 3.19-4a34.64 34.64 0 016.85-3.84 30.08 30.08 0 00-3.12-3A31.2 31.2 0 0176.67 9C75.82 8 75 7 75 5.83a3.46 3.46 0 01.76-2.31A11.29 11.29 0 0179 1.26 13.39 13.39 0 0184.87 0a3.22 3.22 0 011.61.36 1.13 1.13 0 01.64 1A3.85 3.85 0 0186 3.87a2.12 2.12 0 01-.63.21c-.25 0-.7-.3-.7-.49s.14-.49.28-.55a2 2 0 001.75-1.61.9.9 0 00-.5-.81 2.68 2.68 0 00-1.35-.28 11.73 11.73 0 00-5.31 1.43c-1.58.87-2.73 1.7-3.12 3.12a6.8 6.8 0 00-.07.8c0 1 0 1.39 1.44 3.1a28.64 28.64 0 003.31 3.37c1.18 1 2.11 1.92 3.33 2.93 3.38-1.47 6.2-2.9 8.46-2.68A2 2 0 0194 13a2.88 2.88 0 01.5.73 1.18 1.18 0 010 .37 15.21 15.21 0 01-.6 1.43c.48-2-1-2.76-3-2.22l-1.58.41a38.18 38.18 0 00-4.61 1.68c.89.76 2.85 1.89 2.72 4a3.87 3.87 0 01-.34 1.46A5.28 5.28 0 0184 23.58c-2 .92-5.83 1.19-8 1.08zm0-.34a12.86 12.86 0 005.48-1.39c2-.93 3.15-2.14 3.52-3.62v-.53a4.47 4.47 0 00-1.19-3 35.91 35.91 0 00-6.73 3.78q-2.87 2.09-3.08 3.77c0 .67.64.99 2 .99z"
                                />
                                <path
                                    fill="transparent"
                                    d="M91.55 25c-.15 0-.22-.08-.22-.23l3.43-12.19c0-.18.19-.28.44-.28s.33.14.33.3-.37 1.27-1.11 3.69c1.09-2 2.12-3.08 3.06-3.08a.89.89 0 01.72.3 1.06 1.06 0 01.25.71 3.6 3.6 0 01-1.08 2.42 1.09 1.09 0 00.46 0c.26-.07.75-.25.86-.29a11.1 11.1 0 001.81-1c.56-.33 1.44-1.68 2.34-2.3.13 0 .16.18.16.29a19.25 19.25 0 01-1.31 1.66 12.9 12.9 0 01-2.22 1.35c-.13.05-.28.12-.49.19s-.4.15-.73.24A10.7 10.7 0 0197 17a2.67 2.67 0 01-1.27.72c-.18 0-.26-.09-.26-.27s.26-.55.83-.67a3.8 3.8 0 001.06-1.18 3.1 3.1 0 00.43-1.54c0-.39-.1-.58-.32-.58a2.78 2.78 0 00-1.6 1.19 18.44 18.44 0 00-1.9 3v.1l-2.17 7a.2.2 0 01-.25.23z"
                                />
                                <path
                                    fill="transparent"
                                    d="M108.7 15.76a6.19 6.19 0 01-.07-1 2 2 0 01-2.2 1.08c-1 0-1.49-.46-1.49-1.37 0-.19-.11-.28-.32-.28a.25.25 0 00-.25.13 9.75 9.75 0 01-1.09 1 1.42 1.42 0 01-.82.4c-.17 0-.26-.19-.26-.48a1.88 1.88 0 01.29-.87 4 4 0 01.73-.91 1.24 1.24 0 01.81-.39c.32 0 .48.14.48.41a.12.12 0 000 .09h.25s.06-.05.06-.12a1.08 1.08 0 00-.2-.64.77.77 0 00-.68-.28 1.79 1.79 0 00-1.13.44 3.8 3.8 0 00-.89 1 2.09 2.09 0 00-.35 1.06c0 .62.31.93.83.93a2.48 2.48 0 001.41-.79l.5-.47a1.41 1.41 0 00.61 1 2.58 2.58 0 001.47.35 2.79 2.79 0 002.19-.66 1.7 1.7 0 00.12.37z"
                                />
                                <path
                                    fill="transparent"
                                    d="M114.72 14.5c0-.09-.32-.21-.29-.3a2 2 0 00-1.43.8 3.55 3.55 0 01-.82.55 6.08 6.08 0 01-1 .36 4.52 4.52 0 01-1.16.14.72.72 0 01-.81-.82 1.89 1.89 0 010-.31 2.52 2.52 0 01.52-1.14 1 1 0 01.69-.37.12.12 0 01.13.13v.06a.14.14 0 00.15.13c.1 0 .15 0 .17-.1 0-.25 0-.41-.13-.48a.57.57 0 00-.36-.11 1.77 1.77 0 00-1.16.56 2.36 2.36 0 00-.69 1.56 1.08 1.08 0 00.4.91 1.67 1.67 0 001.08.31 5.57 5.57 0 002.34-.56c.79-.37.6-.43 1.34-1a1.1 1.1 0 01.76-.19.3.3 0 00.27-.13z"
                                />
                                <path
                                    fill="transparent"
                                    d="M116 16.3c-1 0-1.6-.49-1.65-1.38a2.13 2.13 0 01.41-1.28 1.46 1.46 0 011.19-.6.69.69 0 01.4.11.4.4 0 01.17.34 1 1 0 01-.55.9 2.45 2.45 0 01-1 .23v.26a1.12 1.12 0 00.27.78 1 1 0 00.76.34 8 8 0 002.18-.22 3 3 0 001.82-1.27c.53-.76 1.17-2.84 2.11-2.83.73 0 1.09.92 1.13.94a8.36 8.36 0 01.44 1.19.11.11 0 010 .07 1.52 1.52 0 01-.22.27s-.31-2-1.36-1.92c-.78 0-1.74 2.8-2.73 3.36a2.55 2.55 0 01-.86.41 6.85 6.85 0 01-2.51.3zm-.87-2.2a2 2 0 00.73-.16.47.47 0 00.35-.45c0-.1-.08-.15-.26-.15-.4 0-.67.26-.86.76z"
                                />
                                <path
                                    fill="transparent"
                                    d="M123.65 13.81s.13 2.12.46 2.15 0-7.54.57-6.23a7.5 7.5 0 01.68 2.41c.16.74-.2 4.6.28 4.57.28 0-.08-8.26.67-8.43s.14 6.31.72 6.38c.84.1-.66-3.19.56-3.2s.6 3.17 1.37 3.24c.52 0 1-1.84 2.09-1.76.5 0 1.44 2.14 1.83 2.2s.21-3.61 1-3.65S135 15 135.49 15s.58-1.41 1-1.34c.67.11.42 1.08 1 1.16a16 16 0 002.54-.62c1.79.11 1.45 1 3.21 1.14 1 0 2-.88 2.76-.5 1.32.64 5.65.39 6.87.34.15 0 .2 0 .22.11s-.21.17-.3.21a1.56 1.56 0 01-.47.09 58.63 58.63 0 01-6.76-.18 8 8 0 00-2.38.39c-.72.1-2.34-1.24-3.05-1.23-.91 0-2.08.94-2.54.94-.72 0-.43-1.25-1.07-1.28s-.23 1.26-.84 1.29c-1.29.07-1.21-3.12-1.75-3.34s-.07 3.75-.91 3.69c-1.27-.09-1.59-2.67-2.11-2.65s-1 2.08-2 2.09-.41-2.6-1-2.65c-1.16-.08.22 3.5-.81 3.53-.76 0-.5-5.34-.78-5.33-.6 0 .07 7.63-.5 7.61-1.23-.05-.45-6.12-1-6.07-.24 0-.17 4.46-.6 4.5-.63.06-.56-.6-.84-2.79z"
                                />
                            </g>
                        </svg>
                        <h3 className="sub-heading">
                            Pure JavaScript Drum Machine <br />
                            <Badge pill variant="warning" id="badgeFont" className="mr-2 mt-4 mb-1">JavaScript</Badge>
                            <Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">Sass</Badge>
                            <Badge pill variant="warning" id="badgeFont" className="mb-2">SVG Animation</Badge>
                        </h3>
                        <p className="project-copy">
                            A pure Javascript drum machine, with background video, SVG
                            graphics and animation. Drum Your heart out!
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- /second project (drumspace)--> */}

        </Container>
    )
}