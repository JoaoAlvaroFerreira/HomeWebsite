import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import "../index.css";

class Navbar extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <a className="navbar-brand" href="/" to="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://laidbackstrat.itch.io/">Games Developed</a>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="./CV.pdf" target="_blank" download>Curriculum Vitae</Link>

                </li>

                <li className="nav-item">
                <div class="dropdown">
  <a className="nav-link" data-toggle="dropdown">Papers
  </a>
  <ul class="dropdown-menu">
  <div className = "dd">
  <li className="nav-item">
                  <Link className="nav-link"  to="./Thesis.pdf" target="_blank" download>Master's Thesis - Injustice and Balance in Pervasive Games</Link>

                </li>
                </div>
                <div className = "dd">
                <li className="nav-item">
                  <Link className="nav-link"  to="./GameAdaptivity.pdf" target="_blank" download>Exploring Multi-Output Regression and Reinforcement Learning for Game Adaptivity</Link>

                </li></div>
  </ul>
</div>
                 

                </li>

              </ul>
              
            </div>
          </nav>



        </div>
      </Router>
    );
  }
}

export default Navbar;