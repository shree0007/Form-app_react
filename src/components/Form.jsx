import React from 'react';
import './Form.css';


const Form = () => {
    return (
        <div className='form'>
            <label htmlFor="fname"> First Name</label><br />
            <input type="text" id='fname' /><br />

            <label htmlFor="lname"> Last Name</label><br />
            <input type="text" id='lname' /><br />

            <label htmlFor="number">Number</label><br />
            <input type="number" id='number' /><br />

            <label htmlFor="role">Role</label><br />
            <select id='role' className='select'>
                <option value=""></option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Other">other</option>

            </select><br />

            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" cols="20" rows="5"></textarea><br />
            <button className='send'>SEND</button>
        </div>
    );
};

export default Form;