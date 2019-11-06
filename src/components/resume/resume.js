import React, { Fragment } from 'react';

const Resume = () => {
    return (
        <Fragment>
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Continuing</span><br /><br />
                            <span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Redwood Code Academy</h3>
                                <p className="info">Certified Full-Stack Developer<span>&bull;</span><em className="date">2019</em></p>
                                <p>Extending career into full-stack web development with an emphasis on the <br />front-end using React and Redux.</p>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Lynda.com</h3>
                                <p className="info">Web Developer Certifications<span>&bull;</span><em className="date">March 2018</em></p>
                                <p>On-going education and learning web development.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work Experience</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>FundedU</h3>
                                <h5>Costa Mesa, CA</h5>
                                <p className="info">Freelance Full Stack Developer <span>&bull;</span><em className="date">August 2019</em></p>
                                <ul>
                                    <li><strong>Task:</strong><br />Develop a web application connecting students with funders.</li><br />
                                    <li><strong>Responsibility:</strong></li>
                                    <li>Set up a server with Node.js and Express</li>
                                    <li>Created a MongoDB schema for registration and login purposes</li>
                                    <li>Set up API routes using passport + jsonwebtokens(JWTs) for <br />authentication and input validation</li>
                                    <li>Created protected routes accessible only to logged-in users <br />based on their authentication.</li>
                                    <li>Created front-end React app with components for navigation, <br />landing page, login, registration and dashboard.</li>
                                    <li>Implemented Redux for state management</li><br />
                                </ul>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Abert Entity</h3>
                                <h5>Palm Springs, CA</h5>
                                <p className="info">Freelance Web Designer <span>&bull;</span><em className="date">February 2018 – May 2019</em></p>
                                <ul>
                                    <li><strong>Task:</strong><br />Develop a web site for new business presentations.</li><br />
                                    <li><strong>Responsibility:</strong></li>
                                    <li>Set up a website using Adobe Muse.</li>
                                    <li>Created a fully functional website that was easily interchangeable to meet <br />the needs of the presentor. The main company portions of the site were <br />static across four templates, and the products sections were changed out <br />to meet the specific client who was being presented.  </li><br />
                                </ul>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Pacific Hospitality Group</h3>
                                <h5>Irvine, CA</h5>
                                <p className="info">Graphic Designer <span>&bull;</span> <em className="date">October 2015 - February 2018</em></p>
                                <ul>
                                    <li><strong>Responsibility:</strong></li>
                                    <li>Designed all materials to support the marketing initiatives and overall <br />brand identities of Pacific Hospitality Group’s Meritage Collection of hotels.</li>
                                    <li>Lead the creative support for hotels, restaurants, spas and ancillary <br />revenue sources via digital and print means</li>
                                    <li>Assisted with design and development of UI/UX interface.</li><br />
                                </ul>
                            </div>
                        </div>
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Bowman Design Group</h3>
                                <h5>Signal Hill, CA</h5>
                                <p className="info">Web Designer / Production Artist<span>&bull;</span> <em className="date">February 2014 - October 2015</em></p>
                                <ul>
                                    <li><strong>Responsibility:</strong></li>
                                    <li>Designed and produced print materials including print advertising, exhibit displays,<br />
                                        museums events, and large format graphics for various clients, including Southern<br />
                                        California Edison, Aquarium of the Pacific, Folsom Powerhouse State Historic Park</li>
                                    <li>Developed website and interactive displays for Google, <br />San Francisco headquarters, using Adobe Muse and Edge Animate.</li><br />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Technical</span><br /><br />
                            <span>Summary</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand css"></span><em>CSS3</em></li>
                                <li><span className="bar-expand html5"></span><em>HTML5</em></li>
                                <li><span className="bar-expand javascript"></span><em>JavaScript (ES6)</em></li>
                                <li><span className="bar-expand react"></span><em>React</em></li>
                                <li><span className="bar-expand javascript"></span><em>Redux</em></li>
                                <li><span className="bar-expand nodejs"></span><em>NodeJS</em></li>
                                <li><span className="bar-expand mongodb"></span><em>MongoDB</em></li>
                                <li><span className="bar-expand express"></span><em>Express</em></li>
                                <li><span className="bar-expand bootstrap"></span><em>Bootstrap</em></li>
                                <li><span className="bar-expand npm"></span><em>NPM</em></li>
                                <li><span className="bar-expand photoshop"></span><em>PhotoShop</em></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>
    );
}

export default Resume;