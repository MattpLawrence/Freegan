import React from 'react';
import {  Link } from "react-router-dom";


const navbar = () => {
    return (
        <div>
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/login">Log-In</Link></li>
            </ul>
        </div>
    );
}


export default navbar;