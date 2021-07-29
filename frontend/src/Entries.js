
import React from "react";
import './App.css';
import { Link} from 'react-router-dom';

const Entries = () => {
    return (
        <div className="entriesContainer">

                    <section class="hero is-medium is-link">
                    <div class="hero-body">
                        <p class="title">
                        Journal Entries
                        </p>
                        <p class="subtitle">
                          Scribble down thoughts    
                        </p>
                    </div>
                    <Link to={'/addentry'}><button class="button is-black">Add Journal Entry</button> </Link>
                    </section>

               <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification">
                        <p className="title">Entry 1...</p>
                        <p className="subtitle">lorem ipsum</p>
                        <p className="date">20.02.20</p>
                        </article>
                        <article className="tile is-child notification">
                        <p className="title">...entry 2</p>
                        <p className="subtitle">Great day :)</p>
                        <figure className="image is-4by3"> 
                        <img src="https://bulma.io/images/placeholders/640x480.png" alt="entry" />
                        </figure>
                        <p className="date">20.02.20</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child notification">
                        <p className="title"> entry 3</p>
                        <p className="subtitle">With an image</p>
                        <figure className="image is-4by3">         
                        <img src="https://bulma.io/images/placeholders/640x480.png" alt="entry" />
                        </figure>
                        <p className="date">20.02.20</p>

                        </article>
                    </div>
                    </div>
                    <div className="tile is-parent">
                    <article className="tile is-child notification">
                        <p className="title">entry 4</p>
                        <p className="subtitle">lorem ipsum</p>
                        <div className="content">
                        {/* <!-- Content --> */}
                        </div>
                    </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child notification">
                    <div className="content">
                        <p className="title">Tall tile</p>
                        <p className="subtitle">With even more content and lorem ipsum</p>
                        <div className="content">
                        {/* <!-- Content --> */}
                        <figure className="image is-4by3">         
                        <img src="https://bulma.io/images/placeholders/640x480.png" alt="entry" />
                        </figure>
                        </div>
                    </div>
                    </article>
                </div>
                </div>
        </div>
    )
}

export default Entries;
