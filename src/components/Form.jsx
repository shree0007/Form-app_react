import React from 'react';
import './Form.css';


const Form = (props) => {
    return (
        <div className='form'>
            <form onSubmit={props.submit} onChange={props.inputChangeHandler}>
                <label htmlFor="firstname"> First Name</label><br />
                <input type="text" name='firstname' id='firstname' /><br />

                <label htmlFor="lastname"> Last Name</label><br />
                <input type="text" name='lastname' id='lastname' /><br />

                <label htmlFor="number">Number</label><br />
                <input type="tel" name='number' id='number' /><br />

                <label htmlFor="role">Role</label><br />
                <select id='role' name='role' className='select'>
                    <option value="" invalid='true' hidden></option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Other">other</option>

                </select><br />

                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="message" cols="20" rows="5"></textarea><br />
                <button type='submit' value='submit' className='send'>SEND</button>

            </form>
        </div>
    );
};

export default Form;