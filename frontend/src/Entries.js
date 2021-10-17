
import React, { useState, useEffect } from "react";
import './App.css';
import { Link} from 'react-router-dom';
import Navbar from "./Navbar";
import Entries2 from './Entries2';
import Modal from './Modal';

const Entries = () => {
    const [toggle, setToggle] = useState('')
    const [modal, setModal] = useState(false)
    const [title, setTitle] = useState('Add an entry..')
    const [content, setContent] = useState('')
    const [button, setButton] = useState('Submit')

    const [entries, setEntries] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const handleToggle = () => {
        setModal(!modal)
        setContent(<textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>)
    }

    const handleClick = () => {
        setButton('Saved!')
    }
   

    async function getAllEntries() {
        const getJWT = localStorage.getItem('token')
        const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId
            await fetch(`/users/${userId}/journalentries`, {
                method: 'GET',
                headers: { "Content-Type": "application/json", 
                            "Authorization": `Bearer ${getJWT}`
            },
            })
        .then((res) => (res.ok) ? Promise.resolve(res) : Promise.reject(new Error(res.statusText))) 
        .then(res => res.json()) 
        .catch(error => console.log('There was a problem!', error))
        .then(data => {
            const entry = data;
            console.log(entry)
            setEntries(entry)
              })

          }
        
          useEffect(() => {
            getAllEntries()
        }, []);

        //console.log('last one', entries.slice(-1)[0])


    return (
        <>
        <Navbar />

        <div className="entriesContainer">

                    <section className="hero is-medium" style={{"background-image": "url({entries.slice(-1)[0].image})"}}>
                    <div className="hero-body">
                        <p className="title">
                        Journal Entries
                        </p>
                        <p className="subtitle">
                          Scribble down thoughts    
                        </p>
                    </div>
                    </section>
        
                    <input class="input searchInput is-rounded" type="text" placeholder="Search" 
                    onChange={event => setSearchTerm(event.target.value)} />


                <div class="imageColumnContainer">
                    {entries.map(entry => (
                        <div class="imageColumn" key={entry._id}>
                            <img className="imageGrid" src={entry.image} alt="entry"></img>
                        </div>  
                      )
                    )}  
                </div>

                    <Link to={'/addentry'}>
                         <button className="button is-black">Return</button> 
                     </Link>

                    <button className="button is-black" onClick={handleToggle}>Add Journal Entry</button> 
                   
                    <Modal toggle={toggle} modal={modal} title={title} content={content} button={button} onClick={handleClick}/> 

            <div class="columns is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
          
                { entries.filter(value => {
                      if (entries === "") {
                        return 'No matches'
                    } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return value
                    }  
                })
              
                .map(entry => (
                        <div class="column" key={entry._id}>
                            <Entries2 entry={entry} /> 
                        </div>    
                    )
                )}   
              
            </div>

             
        </div>
        </>
    )
}

export default Entries;
