import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <div className='container'>

            <ul className="list">
                <li>First name: <span>{props.firstname}</span></li>
                <li>Last name: <span>{props.lastname}</span></li>
                <li>Number: <span>{props.number}</span></li>
                <li>Role: <span>{props.role}</span></li>
                <li>Message: <span>{props.message}</span></li>

            </ul>
        </div>
    );
};

export default View;