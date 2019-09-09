import React, { Fragment } from 'react';

const Testimonials = () => {
    return (
        <Fragment>
            <section id="testimonials">
                <div className="text-container">
                    <div className="row">
                        <div className="four columns header-col">
                            <h1><span>Client Testimonials</span></h1>
                        </div>
                        <div className="eight columns flex-container">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <blockquote>
                                        <p>Steve has been cleaning up after me for more years than I care to mention. While I worked on the big picture, Steve turned it into reality. No matter what inspired concept I threw out, Steve always made it work.</p>
                                        <cite>Mel Abert, CEO <br/>Abert/Entity</cite>
                                        </blockquote>
                                    </li>
                                    <li>
                                        <blockquote>
                                            <p>Steve has a keen sensitivity for detail. Whatever the concept, Steve makes it work by crafting it into a carefully integrated overall design. Steve has over 20 years in the industry and makes each project a work of art.</p>
                                            <cite>Jerrold Smith, CEO <br/>1 + One Management, Inc.</cite>
                                        </blockquote>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Testimonials;