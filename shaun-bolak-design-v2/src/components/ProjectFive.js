import React from 'react';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import FSC2020Gif from '../video/FSC2020.mp4';


export const ProjectFive = () => {
    return (
        <Container className="project-examples">

				{/* <!-- fifth project (FSC2020) --> */}
					<div className="d-flex flex-lg-row flex-wrap align-items-md-center">
						<div className="fsc2020 hov" id="fsc2020Gif">
							<div className="text-center text-xl-right gif-container">
								<video className="gif" autoPlay muted loop>
									<source src={FSC2020Gif} type="video/mp4" /> ;     
								</video>
								{/* <!-- overlay links --> */}
								<div className="overlay text-center">
									<div className="link-container">
										<a href="./links/FSC2020/index.html" target="_blank">
											<p className="project-links">See it Live</p>
										</a>

										<hr className="linkHR" />

										<a
											href="https://github.com/shonb6570/FSC2020"
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

						<div className="col-sm copy fsc2020" id="fsc2020Copy">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="fsc2020logo"
								viewBox="0 0 399.83 116.44"
							>
								<g id="Layer_2" data-name="Layer 2">
									<g id="Layer_1-2" data-name="Layer 1">
										<path
											className="fsc2020-1"
											d="M212.53,9.33H372.69c14.72,0,25.47,13.48,25.89,28.16V69.27C396.69,90.42,382.1,96.64,376.2,97H213.12l-195,0C7.52,97,.54,90.77.54,82.23c0-13.29,0-35.7,0-50.52C.5,20.19,13.58,9.33,21.17,9.33H212.53Z"
										/>
										<path
											className="fsc2020-2"
											d="M213.29,8.89H373.44c14.73,0,25.48,13.61,25.89,28.44V69.44c-1.89,21.35-16.47,27.64-22.38,28H213.29"
										/>
										<path
											className="fsc2020-2"
											d="M125.71,97.44l-107.63,0C7.52,97.42.54,91.15.54,82.53c0-13.43,0-36.06,0-51C.5,19.85,13.58,8.89,21.17,8.89H125.71"
										/>
										<path
											className="fsc2020-3"
											d="M191.51,12.9H373.18C385.45,12.9,395,25.47,395,39.05c0,8.13-.1,15.25-.1,28.78,0,19.68-14.32,26.08-20.66,26.52-45.61,0-114.49,0-182.69,0"
										/>
										<path
											className="fsc2020-3"
											d="M147.85,94.35H19.74c-6.89,0-15.57-2.6-15.57-13V31.92c0-8.56,8.9-19,19.15-19H147.85"
										/>
										<line
											className="fsc2020-4"
											x1="158.96"
											y1="13.65"
											x2="158.96"
											y2="102.22"
										/>
										<line className="fsc2020-5" x1="180.29" x2="180.29" y2="93.49" />
										<line
											className="fsc2020-6"
											x1="169.63"
											y1="26.02"
											x2="169.63"
											y2="116.44"
										/>
										<path
											className="fsc2020-7"
											d="M103.56,67.72a25.39,25.39,0,0,0,.26,3.62,24.39,24.39,0,0,0,3.8,10h0v-31h-4.07Z"
										/>
										<line
											className="fsc2020-8"
											x1="107.63"
											y1="45.76"
											x2="107.63"
											y2="81.02"
										/>
										<path
											className="fsc2020-9"
											d="M103.56,38.71a22.15,22.15,0,0,1,43.84-4.46l0,.17"
										/>
										<path
											className="fsc2020-9"
											d="M103.56,68.24a22.49,22.49,0,0,0,.26,3.4,22.14,22.14,0,0,0,44-3.4v-.32"
										/>
										<line
											className="fsc2020-9"
											x1="103.56"
											y1="38.71"
											x2="103.56"
											y2="68.24"
										/>
										<path
											className="fsc2020-7"
											d="M193.91,71.81a20.34,20.34,0,0,0,1,3.22h0L228.48,55l.18-.12.05-.05.07-.07s0,0,.05,0l0-.06.06-.06c2.06-2,3.63-5.33,4.71-8.07l0-.13-40,24.34c.06.37.13.73.21,1.09l-.21-1.09"
										/>
										<path
											className="fsc2020-9"
											d="M235.44,37.71c0-12.23-9.92-21.14-22.15-21.14a22.14,22.14,0,0,0-21.78,18.18"
										/>
										<path
											className="fsc2020-8"
											d="M233.64,46.47c-1.14,2.87-2.8,6.33-5,8.46l-.07.06-.06.07-.05.06-.07.07-.05,0-.19.13L192.71,76.42"
										/>
										<path
											className="fsc2020-9"
											d="M235.44,37.71a22.08,22.08,0,0,1-1.74,8.62L191.44,71.87c.06.39.13.77.22,1.15l-.22-1.15"
										/>
										<path
											className="fsc2020-9"
											d="M191.67,73a22.16,22.16,0,0,0,21.62,17.34c11.08,0,20.26-9.13,21.89-19.74a22.49,22.49,0,0,0,.26-3.4"
										/>
										<path
											className="fsc2020-7"
											d="M243,67.89a23.77,23.77,0,0,0,.26,3.51,23.18,23.18,0,0,0,3.8,9.72h0V51.06H243Z"
										/>
										<line
											className="fsc2020-9"
											x1="243.03"
											y1="38.71"
											x2="243.03"
											y2="68.24"
										/>
										<line
											className="fsc2020-8"
											x1="247.09"
											y1="46.69"
											x2="247.09"
											y2="81.02"
										/>
										<path
											className="fsc2020-9"
											d="M243,38.71a22.15,22.15,0,0,1,43.85-4.46.85.85,0,0,0,0,.17c0,.1,0,.17.09.4s.06.29.1.44.08.45.1.58c.05.36.11,1.43.11,1.43V67.92c0,.11,0,.21,0,.32a21.66,21.66,0,0,1-.53,4.8,22.15,22.15,0,0,1-43.5-1.4,22.49,22.49,0,0,1-.26-3.4"
										/>
										<path
											className="fsc2020-7"
											d="M53.87,35.05,93.65,59.53a22.89,22.89,0,0,1,1.9,6.74l-40.91-25A14.33,14.33,0,0,1,53.87,35.05Z"
										/>
										<path
											className="fsc2020-8"
											d="M97.73,67.46l-43-26a14.72,14.72,0,0,1-.81-6.4"
										/>
										<path
											className="fsc2020-9"
											d="M97.88,69.24c0,12.23-9.92,21.14-22.15,21.14A22.16,22.16,0,0,1,53.94,72.21"
										/>
										<path
											className="fsc2020-9"
											d="M97.39,35.07l-.06-.25c-2.22-10-11-18.25-21.6-18.25A22.15,22.15,0,0,0,54.11,33.91c-.07.4-.13.79-.17,1.17L96.17,60.74a21.83,21.83,0,0,1,1.71,8.5"
										/>
										<path
											className="fsc2020-7"
											d="M296.74,71.75a21.71,21.71,0,0,0,1,3.21h0l33.77-20,.18-.12.05,0,.06-.07,0-.05.06-.06.06-.07c2.06-2,3.64-5.31,4.73-8l.05-.13L296.52,70.64c.06.36.13.73.21,1.09l-.21-1.09"
										/>
										<path
											className="fsc2020-9"
											d="M338.48,37.71c0-12.23-9.91-21.14-22.14-21.14a22.15,22.15,0,0,0-21.79,18.18"
										/>
										<path
											className="fsc2020-8"
											d="M336.69,46.47c-1.15,2.87-2.8,6.33-5,8.46l-.06.06s-.06.06-.06.07a.33.33,0,0,0-.06.06l-.06.07-.06,0-.19.13L295.76,76.42"
										/>
										<path
											className="fsc2020-9"
											d="M338.48,37.71a22.08,22.08,0,0,1-1.74,8.62L294.48,71.87c.06.39.14.77.22,1.15l-.22-1.15"
										/>
										<path
											className="fsc2020-9"
											d="M294.72,73a22.15,22.15,0,0,0,21.62,17.34c11.07,0,20.25-9.13,21.88-19.74a22.49,22.49,0,0,0,.26-3.4"
										/>
										<path
											className="fsc2020-7"
											d="M346.25,68.15a23.77,23.77,0,0,0,.26,3.51,23.31,23.31,0,0,0,3.8,9.72h0V51.32h-4.07Z"
										/>
										<line
											className="fsc2020-9"
											x1="346.07"
											y1="38.71"
											x2="346.07"
											y2="68.24"
										/>
										<line
											className="fsc2020-8"
											x1="350.14"
											y1="46.95"
											x2="350.14"
											y2="81.02"
										/>
										<path
											className="fsc2020-9"
											d="M346.07,38.71a22.15,22.15,0,0,1,43.85-4.46,1.36,1.36,0,0,1,0,.17c0,.1,0,.17.09.4s.07.29.1.44.08.45.1.58c.05.36.11,1.43.11,1.43v31a22.15,22.15,0,1,1-44.29,0"
										/>
										<rect
											className="fsc2020-7"
											x="7.52"
											y="46.81"
											width="25.67"
											height="4.24"
										/>
										<line
											className="fsc2020-8"
											x1="7.52"
											y1="50.93"
											x2="34.83"
											y2="50.93"
										/>
										<line
											className="fsc2020-9"
											x1="7.52"
											y1="34.82"
											x2="7.52"
											y2="80.04"
										/>
										<line
											className="fsc2020-9"
											x1="7.52"
											y1="46.81"
											x2="34.83"
											y2="46.81"
										/>
										<path
											className="fsc2020-9"
											d="M7.52,34.82c0-9.73,8.5-17.61,19-17.61H52.39"
										/>
										<path
											className="fsc2020-9"
											d="M7.52,80a10.15,10.15,0,0,0,10,10.34"
										/>
									</g>
								</g>
							</svg>
							<h3 className="sub-heading">
								Full Stack Conf 2020 Site with Registration Form
								<br />
								<Badge pill variant="warning" id="badgeFont" className="mr-2 mt-4 mb-1">Bootstrap</Badge>
								<Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">Sass</Badge>
								<Badge pill variant="warning" id="badgeFont" className="mr-2 mb-1">SVG Graphics</Badge>
								<Badge pill variant="warning" id="badgeFont" className="mb-2">Forms</Badge>
							</h3>

							<p className="copy project-copy">
								A pure bootstrap example site for the Full Stack Conference,
								with responsive forms and custom CSS.
							</p>
						</div>
					</div>
            {/* <!-- /forth project (circles)--> */}

			</Container>

	)
}