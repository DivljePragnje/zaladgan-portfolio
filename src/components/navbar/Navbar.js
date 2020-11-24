import React from "react";
import "./Navbar.styles.scss";
import Scroll from "react-scroll";
const Link = Scroll.Link;
function Navbar() {
  return (
    <div className="float-right">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="about-wrapper" spy={true} smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio-wrapper"
                spy={true}
                smooth={true}
                duration={500}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact-wrapper"
                spy={true}
                smooth={true}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
