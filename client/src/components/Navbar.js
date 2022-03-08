import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function navbar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down flex-row">
            <li className="mx-1 brand-logo">
              <Link to="/">Freegan</Link>
            </li>
            <li className="mx-1">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="mx-1">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="mx-1">
              <a href="/" onClick={() => Auth.logout()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down flex-row">
            <li className="mx-1 brand-logo">
              <Link to="/">Freegan</Link>
            </li>
            <li className="mx-1">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="mx-1">
              <Link to="/login">Log-In</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default navbar;
