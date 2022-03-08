import React from "react";
import Auth from "../utils/auth";
// import { Link } from "react-router-dom";

<<<<<<< HEAD

const navbar = () => {
    return (
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Freegan</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/login">Log-In</Link></li>
            </ul>
=======
function navbar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="nav-wrapper">
          <a className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="mx-1">
              <a to="/">Freegan</a>
            </li>
            <li className="mx-1">
              <a to="/dashboard">Dashboard</a>
            </li>
            <li className="mx-1">
              <a to="/profile">Profile</a>
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
        <div className="nav-wrapper leftAlign">
          <a className="brand-logo left">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="">
              <a to="/">Freegan</a>
            </li>
            <li className="mx-1">
              <a to="/signup">Signup</a>
            </li>
            <li className="mx-1">
              <a to="/login">Log-In</a>
            </li>
          </ul>
>>>>>>> d97165f04fdc36a98c431308146f6a1643fddd54
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
