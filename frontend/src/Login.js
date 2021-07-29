import React from "react";
import './App.css';
import { Link} from 'react-router-dom';

import Navbar from './Navbar'

const Login = () => {
    return(
        <div>
             
             <Navbar />

<section className="hero is-fullheight-with-navbar">
  <div className="hero-body">
     <img src="https://i.imgur.com/cKlZATF.png" className="heroImg" alt="" />

     <div className ="signupform">
       <h1 className="signupTitle">Login</h1>

          <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Ada Lovelace" />
            <span class="icon is-small is-left">
            <i class="fas fa-signature"></i>              
            </span>

          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Password" />

            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
          </div>
        </div>

        <div class="control">
          <button class="button is-black">Submit</button>
        </div>
        </div>

  </div>


</section>
        </div>
    )
}

export default Login;
