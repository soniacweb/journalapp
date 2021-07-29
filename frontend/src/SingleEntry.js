import React from 'react';
import Navbar from './Navbar';

const SingleEntry = () => {
    return (  
        <div>
        <Navbar /> 

        <section className="hero is-fullheight-with-navbar" >
        <div className="columns">
        <div className="column">
            <p className="title">Title</p>
            <p className="subtitle">testing 123</p>
        </div>
        <div className="column">
            {/* <img src="" /> */}
            {/* if no image, display block this */}
            <figure className="image entryImg">
                <img src="https://bulma.io/images/placeholders/256x256.png" alt="entryimg"/>
            </figure>
        </div>
       
        </div>
        </section>
        </div>
    );
}
 
export default SingleEntry;