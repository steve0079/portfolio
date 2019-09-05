import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li><a href="https://www.facebook.com/Steve9512" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/stevemartindeveloper-designer/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                        <ul className="copyright">
                            <li>&copy; Copyright 2019 Steve Martin</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;