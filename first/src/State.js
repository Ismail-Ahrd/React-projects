import React, { useState,useContext } from 'react';
import { AppContext } from './App';

function State() {
    const {userName} = useContext(AppContext); 
    const [count, setCount] = useState(0);
    const increaseNumber = () => {
        setCount(count+1);
    }

    const [inputValue, setInputValue] = useState("");
    const handleInputValue = (event) => {
        setInputValue(event.target.value);
        // console.log(event);
    }

    return (
        <div className='state'>
            <h1>Welcome {userName}</h1>
            <h2>{count}</h2>
            <button onClick={increaseNumber}>increase</button><br /><br />
            <input type="text" onChange={handleInputValue} />
            <h3>{inputValue}</h3>
        </div>
    )
}

export default State