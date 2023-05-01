import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className='overlay'>
            <div className='modal'>
                <h3>This is your note:</h3>
                <p>First name: <span>{props.firstname}</span></p>
                <p>Last name: <span>{props.lastname}</span></p>
                <p>Number: <span>{props.number}</span></p>
                <p>Role: <span>{props.role}</span></p>
                <p>Message: <span>{props.message}</span></p>
                <div className='buttons'></div>
                <button onClick={props.click} id='btn-yes'>Yes, I AM SURE</button>
                <button onClick={props.click} id='btn-no'>NO, I DON'T WANT TO POST IT</button>
            </div>
        </div>
    );
};

export default Modal;