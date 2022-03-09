import React from "react";
import auth from "../utils/auth";
import { Link } from "react-router-dom";

function navbar() {

  function showNavigation() {
    if (auth.loggedIn()) {
      return (
        <div className="nav-wrapper">
          <Link to={{ pathname: `/signupPage` }} className="brand-logo">
            SignUp
          </Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="mx-1">
              <a to="/">Freegan</a>
            </li>
            <li className="mx-1">
              <Link to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="mx-1">
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li className="mx-1">
              <a href="/" onClick={() => auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
        
      );
    } else {
      return (
        <div className="nav-wrapper leftAlign">
          <Link to={{ pathname: `/` }} className="brand-logo">
            &nbsp;&nbsp;Freegan
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="mx-1">
              <Link to={{ pathname: `/signupPage` }}>SignUp</Link>
            </li>
            <li className="mx-1">
              <Link to={{ pathname: `/loginPage` }}>LogIn</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default navbar;