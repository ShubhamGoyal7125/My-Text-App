import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li> */}
          </ul>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" value="option2" />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string

}

Navbar.defaultProps = {
  title: "Set Title Here" //If we don't give any title as props, then it will be displayed in place of title
}