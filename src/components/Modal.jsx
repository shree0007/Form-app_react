import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className='modal'>
            <h3>This is your note:</h3>
            <p>First name:{props.firstname}</p>
            <p>Last name:{props.lastname}</p>
            <p>Number:{props.number}</p>
            <p>Role:{props.role}</p>
            <p>Message:{props.message}</p>
            <div className='buttons'></div>
            <button id='btn-yes'>Yes, I AM SURE</button>
            <button id='btn-no'>NO, I DON'T WANT TO POST IT</button>

        </div>
    );
};

export default Modal;