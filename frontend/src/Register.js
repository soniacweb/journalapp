
import React, { useState } from "react";
import './App.css';
// import { Link} from 'react-router-dom';

import Navbar from './Navbar'


const Register = () => {
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    const newEntry = {username, password}
    console.log(newEntry)

    const response = await fetch('/registration', {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json",
      },
        body: JSON.stringify(newEntry)
    })

    if (response.ok) {
      console.log('user added')
      // redirect them to login using react router
      const jwt = await response.text()
      localStorage.setItem('token', jwt)
      // window.location
      window.location.href = "/login";


    } else {
      console.log('error')
      // response.sendStatus(403)
      alert('That username is taken, sorry!')
    }
  
}

    return (
        <div>
     <Navbar />

<section className="hero is-fullheight-with-navbar">
  <div className="hero-body">
     <img src="https://i.imgur.com/x2uPKll.png" className="heroImg" alt="" />

<div class="formContainer">
     <form onSubmit={handleSubmit}>

     <div className ="signupform">
       <h1 className="signupTitle">Register</h1>

          <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input className="input" 
            type="text" 
            placeholder="Ada Lovelace" 
            value={username}
            onChange={(e)=> setName(e.target.value)}
            />
               <span className="icon is-small is-left">
                <i className="fas fa-signature"></i>
              </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input 
            className="input password" 
            type="password"
             placeholder="Password"
             value={password}
             onChange={(e)=> setPassword(e.target.value)} 
             />
             <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>

          </div>
        </div>

        <div className="control">
          <button className="button is-black">
            <i className="fas fa-arrow-circle-right"></i>Submit</button>
        </div>
        </div>

        </form>
        </div>
  </div>


</section>
        </div>
    )
}

export default Register;
