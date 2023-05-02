import React from 'react';
import './Post.css';


const Post = (props) => {
    return (
        <div className='post'>
            <h2>My notes:</h2>
            <ol>
                {props.data.map(note => <li key={note.id}>{note.firstname}, {note.lastname},{note.number}, {note.role}, {note.message}</li>)}
            </ol>

            {/* {props.title}
            {props.author} */}
        </div>
    );
};

export default Post;