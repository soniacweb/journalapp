import React from 'react'

const Entries2 = ( { entry }) => {
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
                    <p className="card-footer-item"><i className="fas fa-edit"></i></p>
                    <p className="card-footer-item" onClick={(e) => console.log('clicked me', e)}><i className="far fa-trash-alt"></i></p>
                </footer>
            </div>  
          
        
      
        </div>
    )
}

export default Entries2
