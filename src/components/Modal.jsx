import React from 'react';
import './Modal.css';

const Modal = () => {
    return (
        <div className='modal'>
            <h3>This is your note:</h3>
            <p>First name:</p>
            <p>Last name:</p>
            <p>Number:</p>
            <p>Role:</p>
            <p>Message:</p>
            <div className='buttons'></div>
            <button id='btn-yes'>Yes, I AM SURE</button>
            <button id='btn-no'>NO, I DON'T WANT TO POST IT</button>

        </div>
    );
};

export default Modal;