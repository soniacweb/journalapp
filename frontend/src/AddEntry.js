
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Navbar from './Navbar'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

const AddEntry = () => {

    const [color,setColor]=useState('#ffef00');
    const [textColor,setTextColor]=useState('black');
    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('')
    const [entry, setEntry] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const newEntry = {date, title, entry}
        console.log(newEntry)

        fetch('/api/users/:UserId/journalentries', {
            method: 'POST',
            header: { "Content-Type": "application/json"},
            body: JSON.stringify(newEntry)
        }).then(()=> {
            console.log('new blog added');
        })
    }

    return (
            <div>
            <Navbar />
            

            <section className="hero is-fullheight-with-navbar" >
                <div className="journal hero-body">
                <img src="https://i.imgur.com/kVmmTuw.png" className="heroImg" alt="background"/>

                <div class="journalContainer">
            <form onSubmit={handleSubmit}>
                <div class="control has-icons-left">
                    <span class="icon is-small is-left">
                      <i class="fas fa-calendar-alt"></i>
                    </span>
            
                <DatePicker className="datepicker"
                    selected={date}
                    // onSelect={handleDateSelect} //when day is clicked
                    onChange={(e) => setDate(e)} //only when value has changed
                    /> 
                    </div>

            <div className="field addentrytitle">
                <label className="label">Title</label>
                  <div className="control has-icons-left">
                    <input 
                    class="input" 
                    type="text" 
                    placeholder="Title" 
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                        <span className="icon is-small is-left">
                        <i className="fas fa-pen-alt"></i>                    
                        </span>
                </div>
                </div>


                <div class="field addentrytitle">
                <label class="label">Image</label>
                  <div class="control has-icons-left">
                    <input class="input"
                     type="text"
                     placeholder="Upload Image"
                     required
                     />
                        <span class="icon is-small is-left">
                        <i class="fas fa-images"></i>
                        </span>
                </div>
                </div>

                <div class="control has-icons-left">
                <textarea 
                class="textarea" 
                placeholder="Hello world" 
                style={{background:color, color:textColor}} 
                onClick={()=> {setColor("black"); setTextColor('white')}}
                value={entry}
                    onChange={(e)=> setEntry(e.target.value)}
                >   
                </textarea>
                <span class="icon is-small is-left">
                        <i class="fas fa-pen-alt"></i>                    
                        </span>
                    </div>
                    
        
                <div class="buttonContainer">
                <button class="button is-black journalBtn">Submit</button>
                {/* <button class="button is-black journalBtn">Edit</button> */}

                <Link to={'/entries'}><button class="button is-black pastentries">See past entries</button></Link>
                </div>

                </form>
                </div>
                </div>
            </section>   
        </div>
    )
}

export default AddEntry;
