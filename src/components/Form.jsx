import React from 'react';
import './Form.css';


const Form = (props) => {
    return (
        <div className='form'>
            <label htmlFor="firstname"> First Name</label><br />
            <input type="text" id='firstname' /><br />

            <label htmlFor="lastname"> Last Name</label><br />
            <input type="text" id='lastname' /><br />

            <label htmlFor="number">Number</label><br />
            <input type="tel" id='number' required /><br />

            <label htmlFor="role">Role</label><br />
            <select id='role' className='select'>
                <option value="" invalid='true' hidden></option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Other">other</option>

            </select><br />

            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" cols="20" rows="5"></textarea><br />
            <button type='submit' onClick={props.submit} className='send'>SEND</button>
        </div>
    );
};

export default Form;