import React from 'react';
import {  Link } from "react-router-dom";


const navbar = () => {
    return (
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Freegan</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/login">Log-In</Link></li>
            </ul>
            <form>
        <div class="input-field">
          <input id="search" type="search" required></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
        </div>
    );
}


export default navbar;