import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/SteveProfile.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Steve Martin</h2>
                        <p>While Steve's career spans over two decades as a web and print designer with UX and UI experience, he has furthered his career path as a full-stack developer.
                        Steve is wired to work in a fast-paced environment producing quality work, and has helped develop a variety of brand and corporate identities through the marketing elements of websites, landing pages, banner ads, <br />email blasts and print advertisements. <br /><br />
                            Steve does annual continuing education certifications to stay current with industry standards. <br />When Steve is not catching his breath from his energetic work style and efforts, he is out walking <br />his three lab mix rescue dogs with his family. Steve is a third generation veteran and still enjoys <br />being of service to others today.<br />
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Steve Martin</span><br />
                                    <span>5357 Hackett Ave<br />
                                        Lakewood, CA 90713</span><br />
                                    <span>562.394.8188</span><br />
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href="images/Steve_Martin_Developer_Resume_2019-4.pdf" target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
                </p>
            </section>
        </Fragment>
    );
}

export default About;
