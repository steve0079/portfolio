import React, { Fragment } from 'react';

const ContactUs = () => {

    return (
        <Fragment>
            <section id="contact">
                <div className="row section-head">
                <div className="three columns header-col">
                    <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="nine columns">
                        <p className="lead">To contact Steve, please fill out the form and click submit. <br/>Please allow 24-hrs for response. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="nine columns">
                        <form action="https://formspree.io/stevem9512@verizon.net" method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                <label htmlFor="contactName">Name <span className="required">*</span></label>
                                <input type="text" placeholder="Enter Your Name" size="25" id="contactName" name="contactName" />
                                </div>
                                <div>
                                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                <input type="email" placeholder="Enter Your Email" size="25" id="contactEmail" name="_replyto" />
                                </div>
                                <div>
                                <label htmlFor="contactSubject">Subject<span className="required">*</span></label>
                                <input type="text" placeholder="Enter A Subject" size="25" id="contactSubject" name="contactSubject" />
                                </div>
                                <div>
                                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                <textarea cols="50" placeholder="Enter A Message" rows="10" id="contactMessage" name="body"></textarea>
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img src="images/loader.gif" alt=""/>
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <div id="message-warning">Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
                        </div>
                    </div>
                    <aside className="three columns footer-widgets">
                        <div className="widget widget_contact">
                            <h4>Address and Phone</h4>
                            <p className="address">
                                Steve Martin<br/>
                                5357 Hackett Ave<br/>
                                Lakewood, CA 90713<br/>
                                <span>562.394.8188</span>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </Fragment>
    );
}

export default ContactUs;