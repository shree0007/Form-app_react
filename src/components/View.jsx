import React from 'react';
import './View.css';

const View = (props) => {
    return (
        <div className='container'>

            <ul className="list">
                <li>First name:{props.firstname}</li>
                <li>Last name: {props.lastname}</li>
                <li>Number:{props.number}</li>
                <li>Role:{props.role}</li>
                <li>Message:{props.message}</li>

            </ul>
        </div>
    );
};

export default View;