import React from 'react'

const Modal = ({modal, toggle, title, content}) => {
    return (
        <div>
            <div className={modal ? 'modal is-active' : 'modal'}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">{title}</p>
                <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
            {/* <!-- Content ... --> */}
                 {content}
                </section>
                <footer className="modal-card-foot">
                <button className="button is-success">Save changes</button>
                <button className="button">Cancel</button>
                </footer>
            </div>
            </div>
        </div>
    )
}

export default Modal
