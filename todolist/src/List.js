import React, { useState } from 'react';
import './List.css';

function List({name}) {
    const [isDone, setIsDone] = useState(false);
    const [remove, setRemove] = useState(false);

    const handleIsDone = () => setIsDone(!isDone)
    const handleRemove = () => setRemove(true)

    return (
        <div className='list' style={{backgroundColor : isDone && "rgb(12, 182, 12)", display : remove && "none" }}>
            <p>{name}</p>
            <button 
                style={{backgroundColor : isDone && "red"}} 
                className='done-btn'
                onClick={handleIsDone}>
                {isDone ? "Undone" : "Done"}
            </button>
            <button className='remove-btn' onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default List