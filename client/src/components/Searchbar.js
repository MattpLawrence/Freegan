import React from 'react';
import {  Link } from "react-router-dom";

const searchbar = () => {
    return (
        <form>
            <div class="input-field">
                <input id="search" type="search" required></input>
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
            </div>
        </form> 
    )
}

export default searchbar;