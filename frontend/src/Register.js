
import React from "react";
import './App.css';
// import { Link} from 'react-router-dom';

import Navbar from './Navbar'


const Register = () => {

  // const handlePassword = () => {
  //   var x = document.querySelector(".input.password");
  //       if (x.type === "password") {
  //         x.type = "text";
  //       } else {
  //         x.type = "password";
  //         }
  //   console.log('clicked me')
  //       }

    return (
        <div>
     <Navbar />

<section className="hero is-fullheight-with-navbar">
  <div className="hero-body">
     <img src="https://i.imgur.com/x2uPKll.png" className="heroImg" alt="" />

     <div className ="signupform">
       <h1 className="signupTitle">Register</h1>

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
            <input class="input password" type="password" placeholder="Password" />
             <span class="icon is-small is-left"
              // onClick={handlePassword}
                >
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

export default Register;
