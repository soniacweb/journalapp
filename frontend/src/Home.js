
import React from "react";
import './App.css';
// import { Link} from 'react-router-dom';

import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
          
       <Navbar />    


<section className="hero is-fullheight-with-navbar">
  <div className="hero-body">
     <img src="https://i.imgur.com/0TKePVR.png" className="heroImg" alt="" />

     <div className ="signupform">
        <h1 className="title">babble.</h1>
        <h3 className="subtitle">a journal app.</h3>
       {/* <h1 className="signupTitle">Sign up</h1>

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
        </div> */}
        </div>

  </div>


</section>

<section class="section is-medium">
  <h1 class="title">Securing your scribbles</h1>
  <h2 class="subtitle">
    Babble.io uses bcrypt to secure your password and an additional internet standard to encrypt your data. Feel <strong>secure</strong> in knowing your information is safe with us.
  </h2>
</section>

        </div>
    )
}

export default Home;
