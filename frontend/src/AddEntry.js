
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const AddEntry = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [color,setColor]=useState('#ffef00');
    const [textColor,setTextColor]=useState('black');

    return (
            <div>
            <Navbar />
            

            <section className="hero is-fullheight-with-navbar" >
                <div className="journal hero-body">
                <img src="https://i.imgur.com/kVmmTuw.png" className="heroImg" alt="background"/>

                <div class="journalContainer">

                <div class="control has-icons-left">
                    <span class="icon is-small is-left">
                      <i class="fas fa-calendar-alt"></i>
                    </span>

                <DatePicker className="datepicker"
                    selected={startDate}
                    // onSelect={handleDateSelect} //when day is clicked
                    onChange={(date) => setStartDate(date)} //only when value has changed
                    /> 
                    </div>

            <div class="field addentrytitle">
                <label class="label">Title</label>
                  <div class="control has-icons-left">
                    <input class="input" type="text" placeholder="Title" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-pen-alt"></i>                    
                        </span>
                </div>
                </div>

                <div class="field addentrytitle">
                <label class="label">Image</label>
                  <div class="control has-icons-left">
                    <input class="input" type="file" placeholder="Upload Image" />
                        <span class="icon is-small is-left">
                        <i class="fas fa-images"></i>
                        </span>
                </div>
                </div>

                <div class="control has-icons-left">
                <textarea class="textarea" placeholder="Hello world" style={{background:color, color:textColor}} onClick={ ()=> {setColor("black"); setTextColor('white')}}></textarea>
                <span class="icon is-small is-left">
                        <i class="fas fa-pen-alt"></i>                    
                        </span>
                    </div>
                    

                <div class="buttonContainer">
                <button class="button is-black journalBtn">Submit</button>
                <button class="button is-black journalBtn">Edit</button>

                <Link to={'/entries'}><button class="button is-black pastentries">See past entries</button></Link>
                </div>
                </div>
                </div>
            </section>   
        </div>
    )
}

export default AddEntry;
