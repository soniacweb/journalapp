import React from "react";
import './App.css';
import { Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
             <nav className="navbar">
                <div className="container">
                    <div id="navMenu" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">
                        babble.io
                        </a>
                        {/* <a href="/" className="navbar-item">
                        Documentation
                        </a> */}
                    </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
          <Link to={'/login'}><button className="button is-white">Sign in</button></Link>
            <Link to={'/register'}><button className="button is-white">Sign up</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar