import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../images/footer-logo.png";
import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import slide4 from "../images/slide-4.png";
import slide5 from "../images/slide-5.png";
import mp1 from "../images/mp-pag-1.png";
import mp2 from "../images/mp-pag-2.png";
import mp3 from "../images/mp-pag-3.png";
import mp4 from "../images/mp-pag-4.png";
import mp5 from "../images/mp-pag-5.png";
import "../css/Header.css";

const slides = [slide1, slide2, slide3, slide4, slide5];

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGalleryDropdown, setShowGalleryDropdown] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleAboutMouseOver = () => {
    setShowGalleryDropdown(true);
  };

  const handleAboutMouseOut = () => {
    setShowGalleryDropdown(false);
  };



  return (
    <header>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '100px',
        /*paddingLeft: '90px',*/
      }}>
        <Link to="/">
          <img src={logo} alt="Your Logo Here" height="60" />
        </Link>
      </div>
      <Navbar expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-lg-4">
            <LinkContainer to="/" className="nav-link px-5">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" className="nav-link px-5">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services" className="nav-link px-5">
              <Nav.Link>Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className="nav-link px-5">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="slider-container">
        <div className="mp-slider">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>
      <div className="services">
        <ul className="services-list">
          <li>
            <Link to="/development" className="service-link">
              <div className="service-item">
                <img src={mp1} alt="Development" />
                <div className="overlay" style={{textAlign: "center"}}>DEVELOPMENT <br /><Link to="/solutions" className='service-link' style={{ color: 'white' }}>
                 SOLUTIONS
                </Link></div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/seo" className="service-link">
              <div className="service-item">
                <img src={mp2} alt="SEO" />
                <div className="overlay" style={{textAlign: "center"}}>
                  SEO <br />
                  <Link to="/bunchsms" className='service-link' style={{ color: 'white' }}>
                    BUNCHSMS
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/web-hosting" className="service-link">
              <div className="service-item">
                <img src={mp3} alt="Web Hosting" />
                <div className="overlay" style={{textAlign: "center"}}> HOSTING <br /> DESIGNING</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/training" className="service-link">
              <div className="service-item">
                <img src={mp2} alt="SEO" />
                <div className="overlay" style={{textAlign: "center"}}>
                 TRAINING <br />
                  <Link to="/education" className='service-link' style={{ color: 'white' }}>
                   EDUCATION
                  </Link>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/association" className="service-link">
              <div className="service-item">
                <img src={mp5} alt="Graphic Designing" />
                <div className="overlay" style={{textAlign: "center"}}>ASSOCIATION <br /> PARTNERSHIP</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
};

export default Header;



