import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import CirclesGif from '../video/circles.mp4';


export const ProjectFour = () => {
    return (
        <Container className="project-examples">

            {/* <!-- forth project (circles) --> */} 
            <div className="d-flex flex-wrap align-items-center">
                
                <div className="d-flex flex-lg-row flex-wrap align-items-md-center">
                    <div className="styleGuide hov">
                        <div className="text-center text-xl-right gif-container">
                            <video className="gif" autoPlay muted loop>
                                <source src={CirclesGif} type="video/mp4" /> ;     
                            </video>
                        {/* <!-- overlay links --> */}
                        <div className="overlay text-center">
                            <div className="link-container">
                                <a href="./links/circles/resources/index.html" target="_blank">
                                    <p className="project-links">See it Live</p>
                                </a>

                                <hr className="linkHR" />

                                <a
                                    href="https://github.com/shonb6570/Brand-Style-Guide"
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

                        <div className="col-sm copy styleGuide" id="styleGuideCopy">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="circlesLogo"
                                viewBox="0 0 490.07 257"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="1.5"
                                        y1="127.28"
                                        x2="230.5"
                                        y2="127.28"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0" stop-color="#f2f2f2" />
                                        <stop offset=".82" stop-color="#999" />
                                        <stop offset=".97" stop-color="#666" />
                                    </linearGradient>
                                </defs>
                                <g id="Layer_3" data-name="Layer 3">
                                    <g id="Layer_1-3" data-name="Layer 1">
                                        <path
                                            d="M230.5 67c0-36.31-30.25-65.75-67.57-65.75-27.83 0-51.72 16.37-62.08 39.76C45.15 45.92 1.5 91.46 1.5 146.93c0 58.74 49 106.36 109.32 106.36s109.32-47.62 109.32-106.36a103.66 103.66 0 00-6.57-36.41A64.47 64.47 0 00230.5 67z"
                                            fill="url(#linear-gradient)"
                                        />
                                        <ellipse
                                            cx="170"
                                            cy="65.7"
                                            rx="60.5"
                                            ry="61.56"
                                            fill="#2eebff"
                                        />
                                        <ellipse
                                            cx="125"
                                            cy="150.76"
                                            rx="105.5"
                                            ry="104.5"
                                            fill="#fbff64"
                                        />
                                        <path
                                            className="circles-cls-4"
                                            d="M230.5 67.25c0-36.31-30.25-65.75-67.57-65.75-27.84 0-51.73 16.37-62.08 39.76C45.15 46.16 1.5 91.7 1.5 147.17c0 56.3 45 102.37 101.84 106.11A106.59 106.59 0 00125 255.5c58.27 0 105.5-47 105.5-105a104.13 104.13 0 00-11.18-47.07 64.08 64.08 0 0011.18-36.18z"
                                        />
                                        <path
                                            className="circles-Logo-Font"
                                            fill="transparent"
                                            d="M98 142.19c5.61 14.7-8.35 31.31-17.54 38-15.54 11.34-34 11.25-45.95 5-9.93-5.21-18.61-18.79-19.19-36.82-1.26-46.71 37.61-86.81 62.18-96.45 11.85-4.71 22.62-5.67 29.71.44 4.87 4.15 10 10.49 11.78 16 2 6.36 1.41 12.53-1.84 19.37s-6.27 15.45-8.64 21.85c-.65 1.76-2.18 3.09-4.83 1.35-5.09-3.26-8.66-10.06-5.44-21.08 3.44-11.69 11.26-24.28 6.17-29.53-6.21-6.55-39.52 11.51-59.08 44.44-19.13 32.24-16.69 64.78-5.85 73.5 14.17 11.34 37.38-3.57 53.86-36.47 1.08-2.43 3.5-2.45 4.66.4zM231.81 153.1c-.9-2-2.44-2-3.3 0-6.92 16.55-18 30.93-26.84 30.78-7-.17-9.53-9.39-5.66-21.3 3.66-11.69 14.33-26.73 24.58-38.68 6.33-7.31 1-17.61-3-22.2-1.77-2.19-4-1.29-6.59.71-8.32 5.78-16.21 9.58-24.13 10.51 5.18-13.9 7.94-27.77.9-27.5-9.24.28-30.58 30.36-13.59 36.62-12.07 34.19-35 59.65-49.28 61.52-7 .93-7.75-7.43-2.56-20 5.62-13.91 14.55-26.51 18.66-36.22 4.75-11 3.37-20.71 0-24.2-1.78-2-3.31-1.3-5.27 1.36-4.57 6.41-21.54 33.15-28 53.66-5.59 18.08-1.07 33.67 15.85 31.79 24-2.82 45.73-35.32 59.14-66.66 7.26 0 17.14-2.32 27-9-9.38 10.63-23.12 27.45-27.63 42.44-5.59 17.86 1.34 32.77 18.06 33.09 12.1.13 25.24-9.21 30.64-22.45 2.61-6.37 2.13-11.86 1.02-14.27z"
                                        />
                                        <path
                                            className="circles-Logo-Font"
                                            fill="transparent"
                                            d="M292.23 112.84c4.69 9.2-4 20.93-8.34 32.84-.86 2.64-1.74 3.31-4.61 1.79-5.3-2.6-8.42-9.18-5.42-19.1 2.37-7.94 8.9-17.45 5.8-19.84-3.76-3.06-20.16 11.14-29.91 31.24-11.92 24.94-7.17 43.17 5.81 43.29 18.48.09 34.19-17.63 43.11-31.55 1.09-1.77 3.07-2 4 .19.67 1.76-.17 7.26-3.87 13.23-8.26 13-25.57 23.95-42.28 24.29-27.94.64-37.6-26.57-23.51-55.05 13.88-27.82 36-39.87 47.06-33.35 5.93 3.48 9.48 6.97 12.16 12.02z"
                                        />
                                        <path
                                            className="circles-Logo-Font"
                                            fill="transparent"
                                            d="M315 182.19c10.52.81 25.8-15.19 34.26-32.19 1.52-2.87 3.94-3.11 4.84 0 1.13 3.51.28 8.35-2.1 13.65-3 6.62-19 25-36.56 24.69-15.18-.33-23.4-10.83-18.51-34.63 7.86-38.34 32.65-78.34 54.92-101.82 3.27-3.55 6.35-4 9.45-1.17 6.42 5.67 7.8 13.8 5.23 24.16-6.62 27.12-31.06 53.7-50.53 66.6-8.67 21.63-10.95 39.9-1 40.71zm44-111.86c-2.87-1.74-19 22.8-33.95 51.07a117.53 117.53 0 00-5.2 10.59c29.98-24.64 42.04-59.93 39.15-61.66z"
                                        />
                                        <path
                                            className="circles-Logo-Font"
                                            fill="transparent"
                                            d="M375.46 182.19c18.26.75 34.19-17 43.55-31.56 1.08-1.77 2.84-1.78 3.74.2.89 1.75.28 7.91-3.64 13.66-9.14 13.49-26 23.73-42.95 24.08-27.93.64-37.81-26.79-23.72-55.27s36.45-40.09 47.49-33.79A41 41 0 01413 110.85c4 5.26 2.33 18.69-6.82 30-10.69 13.27-25.39 19.1-40.88 6.67-6.89 20.28-1.51 34.1 10.16 34.67zm17.89-50.73c7-9.29 11.73-20.77 8.63-23.17-4.65-3.7-22.81 9.63-33 30.61-.65 1.32-1.3 2.65-1.73 3.75 10.83 6.74 19.75-2.79 26.1-11.19z"
                                        />
                                        <path
                                            className="circles-Logo-Font"
                                            fill="transparent"
                                            d="M448 110.6c1-8.59 3.2-12.79 7.79-17 4.81-4.43 9.86-5.35 11.86-3.38 2.21 2.18 1.13 4.61-1.69 9.69-.87 1.32-1.52 2.65-2.39 4.2-1.39 20.25 2.91 37.38 2.36 52.56-.37 8.58-1.85 17.83-9.73 23.17 14.7-5.61 23.85-18.87 29.26-30.79 1.08-2.43 3.29-1.79 4.18 0 .89 2 .71 7.69-3 14.54A46.32 46.32 0 01447.88 188c-12.76.54-25.1-2.67-32.68-16.26-5.35-9.86-4.8-24.39 2.64-30.6 2.62-2.22 4.39-1.35 4.63 2.17.24 1.75.25 3.52.48 5.27 8.93-12.34 18.73-26.71 25.05-37.98zm-23 49.89c3.39 12.73 9.84 21.71 17.08 19.45 10.1-3.15 6.55-37.66 5.54-55.26-6.28 11.71-14.33 23.87-22.62 35.81z"
                                        />
                                        <path
                                            className="cls-4"
                                            d="M125 45.76c39.78 0 76.71 23.57 94 57 7.87-10.32 10.5-23.22 10.5-37.28 0-33.71-26.91-61-60.11-61A59.6 59.6 0 00112 46.76a96.19 96.19 0 0113-1z"
                                        />
                                        <circle
                                            className="circles-Logo-Font"
                                            fill="transparent"
                                            cx="168.25"
                                            cy="57.51"
                                            r="18.75"
                                            stroke="transparent"
                                            stroke-miterlimit="10"
                                        />
                                    </g>
                                </g>
                            </svg>
                            <h3 className="mb-4 sub-heading">
                                Brand Style Guide <br />
                                <Badge pill id="badgeFont" className="mr-2 mt-4 mb-1">CSS Grid</Badge>
                                <Badge pill id="badgeFont" className="mr-2 mb-1">Sass</Badge>
                                <Badge pill id="badgeFont" className="mb-2">SVG Graphics</Badge>
                            </h3>
                            <p className="copy project-copy">
                                This is a brand style guide for Circles, created with CSS grid
                                and Sass, and responsive design.
                            </p>
                        </div>
                </div>
            </div>
            {/* <!-- /forth project (circles)--> */}

        </Container>

    )
}