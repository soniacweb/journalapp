import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';
// import Modal from './Modal';

const Entries2 = ( { entry, match }) => {
    // const [toggle, setToggle] = useState('')
    const [modal, setModal] = useState(false)
    // const [content, setContent] = useState('')
    const [button, setButton] = useState('Submit')

    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [journalEntry, setJournalEntry] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        let { id } = match.params;
        const newEntry = {date, title, image, journalEntry}
        console.log(newEntry)
        const getJWT = localStorage.getItem('token')
        const userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).userId
        const response = await fetch(`/users/${userId}/journalentries/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json", 
                        "Authorization": `Bearer ${getJWT}`
        },
            body: JSON.stringify(newEntry)
        })
        if (response.ok) {
            console.log('entry added')
            setButton('Saved!')
          } else {
            console.log('error')
            // response.sendStatus(403)
          }
    }

    const handleToggle = () => {
        setModal(!modal)
        // setContent(<textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>)
    }

    return (
        <div>
          <div className="card" >
                <div className="card-image">
                <figure className="image is-4by3">
                    <img src={entry.image} alt="Placeholder" />
                </figure>
                </div>
                <div className="card-content">
                <div className="media">
                    <div className="media-left">
                    <figure className="image is-48x48">
                        <img src={entry.image} alt="Placeholder" />
                    </figure>
                    </div>
                    <div className="media-content">
                    <p className="title is-4">{entry.title}</p>
                    </div>
                </div>
            
                <div className="content">
                    {entry.entry} <a>@bulmaio</a>.
                    <a href="/">#css</a> <a href="/">#responsive</a>
                    <br></br>
                    <time datetime={entry.date}>{entry.date}</time>
                </div>
                </div>
                <footer className="card-footer">
                    <p className="card-footer-item"><i className="far fa-save"></i></p>
                    <p className="card-footer-item" onClick={handleToggle}><i className="fas fa-edit"></i></p>

                    {/* <Modal toggle={toggle} modal={modal} title={title} content={content} button={button} onClick={handleClick}/>  */}

                        {/* Modal */}
                    <div className={modal ? 'modal is-active' : 'modal'}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">{title}</p>
                        <button className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                                {/* <!-- Content ... --> */}

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

                                <div className="control has-icons-left">
                                <label className="label">Title</label>   
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

                            <div class="field">
                            <label class="label">Image</label>
                            <div class="control has-icons-left">
                                <input class="input"
                                type="text"
                                placeholder="Upload Image"
                                required
                                value={image}
                                onChange={(e)=> setImage(e.target.value)}
                                />
                                    <span class="icon is-small is-left">
                                    <i class="fas fa-images"></i>
                                    </span>
                            </div>
                            </div>


                                <textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>

                        </section>
                        <footer className="modal-card-foot">
                        <button className="button is-success">{button}</button>
                        <button className="button">Cancel</button>
                        </footer>
                    </div>
                    </div>

                    <p className="card-footer-item" onClick={(e) => console.log('clicked me', e)}><i className="far fa-trash-alt"></i></p>
                </footer>
            </div>  
          
        
      
        </div>
    )
}

export default Entries2
