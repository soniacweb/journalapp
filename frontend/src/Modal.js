import React from 'react'

const Modal = ({modal, toggle, title, content, button, closeModal}) => {
    return (
        <div>
            <div className={modal ? 'modal is-active' : 'modal'}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">{title}</p>
                <button className="delete" aria-label="close" onClick={closeModal}></button>
                </header>
                <section className="modal-card-body">
            {/* <!-- Content ... --> */}
                 {content}
                </section>
                <footer className="modal-card-foot">
                <button className="button is-success">{button}</button>
                <button className="button">Cancel</button>
                </footer>
            </div>
            </div>
        </div>
    )
}

export default Modal
