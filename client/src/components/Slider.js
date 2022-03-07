import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";

export default class Slider extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s6">Col 1</div>
          <div className="col s6">Col 2</div>
        </div>
        <div className="container">
          <div class="slider">
            <ul class="slides">
              <li>
                <img className="Forest" />
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img className="Birds" />
                <div class="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img className="Neighbor" />
                <div class="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
              <li>
                <img className="Sunset" />
                <div class="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 class="light grey-text text-lighten-3">
                    Here's our small slogan.
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
