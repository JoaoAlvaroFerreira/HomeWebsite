import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

class Navbar extends React.Component {
  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" to="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/games">Games</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
        </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/games">Games Developed</Link>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="./CV.pdf" target="_blank" download>Curriculum Vitae</Link>
              
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