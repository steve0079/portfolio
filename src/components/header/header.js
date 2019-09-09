import React, { Fragment } from 'react'

const Header = (props) => {
  let resumeData = props.resumeData;
  return (
    <Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive headline">{resumeData.name}</h1>
            <h3>I'm a <span>{resumeData.role}</span> and <span>{resumeData.secondRole}</span>, creating effective visual identities for companies of all industries.</h3>
            <ul className="social">
              <li><a href="https://www.facebook.com/Steve9512" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" ></i></a></li>
              <li><a href="https://www.linkedin.com/in/stevemartindeveloper-designer/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    </Fragment>
  );
}

export default Header;