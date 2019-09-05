import React, { Fragment } from 'react';

const Portfolio = () => {
    return (
        <Fragment>
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Work.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-01" title="Bowman Design Group Website">
                                        <img src="images/portfolio/bdg_web.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Bowman Design Group</h5>
                                                <p>Web Design/Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon=plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-02" title="">
                                        <img src="images/portfolio/dLink_landing.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>D-Link</h5>
                                                <p>Landing Page Design/Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon=plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-03" title="">
                                        <img src="images/portfolio/epson_web.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Epson Printers</h5>
                                                <p>Landing Page Design/Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-04" title="">
                                        <img src="images/portfolio/mas_web.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Malaysia Airlines</h5>
                                                <p>Web Desgin</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-05" title="">
                                        <img src="images/portfolio/ae-web.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Abert Entity</h5>
                                                <p>Web Design/Development</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-06">
                                        <img src="images/portfolio/mitsu_rt1.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Mitsubishi Electric</h5>
                                                <p>Photo Retouching</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-07" title="">
                                        <img src="images/portfolio/HiOxMask.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>HiOx</h5>
                                                <p>Photo Retouching</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                    <a href="#modal-08" title="">
                                        <img src="images/portfolio/PLC_Ship.jpg" alt="" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>PLC Shipping</h5>
                                                <p>Photo Retouching</p>
                                            </div>
                                        </div>
                                        <div className="link-icon"><i className="icon-plus"></i></div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-01">
                    <img src="images/portfolio/modals/m-bdg_web.jpg" alt="Bowman Design Group Website" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>Bowman Design Group</h4>
                        <p><strong>Task</strong> To develop a company website while working closely with the Art Director. <br /> <strong>Responsibility</strong> I was able to review each design element of the site, and develop and execute the layout and functionality using Adobe Muse.</p>
                        <span className="categories"><i className="fa fa-tag">Web Design, Development</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-02">
                    <img src="images/portfolio/modals/m-dLink_landing.jpg" alt="Landing Page for D-Link" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>D-Link</h4>
                        <p><strong>Task</strong> Create a landing page for D-Link Smart Home Products. <br /> <strong>Responsibility</strong> Working with the creative team, I was able to desgin the landing page using Adobe Photoshop, then complete the development stage using html, css and js.</p>
                        <span className="categories"><i className="fa fa-tag">Landing Page Design, Development</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-03">
                    <img src="images/portfolio/modals/m-epson_web.jpg" alt="Epson Landing Page" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>Epson</h4>
                        <p><strong>Task</strong> Create a landing page for Epson Projectors that linked directly to a product page. <br /> <strong>Responsibility</strong> Working with the art director, I was able to utilize the design elements and create the artwork using Adobe Photoshop, then develop the page using html, css and js.</p>
                        <span className="categories"><i className="fa fa-tag">Landing Page Design, Development</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-04">
                    <img src="images/portfolio/modals/m-mas_web.jpg" alt="Malaysia Airlines" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>Malaysia Airlines</h4>
                        <p><strong>Task</strong> Design Malaysia Airlines website. <br /> <strong>Responsibility</strong> Working with the creative and art directors, I was given the responsibility to design each page of the site, and work closely with the developers to have the site fully functional and meet the clients design needs. <em>(This was my first website designed, circa 2002)</em></p>
                        <span className="categories"><i className="fa fa-tag">Web Design</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-05">
                    <img src="images/portfolio/modals/m-ae_web.jpg" alt="" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>Abert Entity</h4>
                        <p><strong>Task</strong> To design and develop a company website while working with the Owner. <br /> <strong>Responsibility</strong> I was able to review each design element of the site, and develop and execute the layout and functionality using Adobe Muse.</p>
                        <span className="categories"><i className="fa fa-tag">Web Design, Development</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-06">
                    <img src="images/portfolio/modals/mitsu_rt1.jpg" alt="Mitsubishi Electric Tradeshow Booth" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>Mitsubishi Electric</h4>
                        <p>A before and after example of my photo retouching skills. The original image (upper left) needed to have the background removed, and foreground cleaned up and color corrected. I even changed out the carpet to match.</p>
                        <span className="categories"><i className="fa fa-tag">Photo Retouching</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-07">
                    <img src="images/portfolio/modals/m-HiOxMask.jpg" alt="HiOx emergency oxygen mask" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>Hi Ox</h4>
                        <p>It's no easy task to retouch an existing image with an overlay of an oxygen mask, but with this before and after, you can see it can be done.</p>
                        <span className="categories"><i className="fa fa-tag">Photo Retouching</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <div className="popup-modal mfp-hide" id="modal-08">
                    <img src="images/portfolio/modals/m-PLC_Ship.jpg" alt="PLC Shipping Cargo Ship" className="scale-with-grid" />
                    <div className="description-box">
                        <h4>PLC Shipping</h4>
                        <p>This before and after shows that an empty cargo ship can be easily manipulated to become a fully loaded cargo ship with added safety railings.</p>
                        <span className="categories"><i className="fa fa-tag">Photo Retouching</i></span>
                    </div>
                    <div className="link-box">
                        <a href="#portfolio" className="popup-modal-dismiss">Close</a>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#testimonials"><i className="icon-down-circle"></i></a>
                </p>

            </section>
        </Fragment>
    );
}

export default Portfolio;