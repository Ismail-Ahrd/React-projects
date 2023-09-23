import React, { useContext, useState } from 'react';
import { AppContext } from './App';

function ChangeName() {
    const {userName, setUserName} = useContext(AppContext); 
    const [inputValue, setInputValue] = useState("");
    const inputName = (event) => {
        setInputValue(event.target.value);
    }
    const changeName = () => {
        setUserName(inputValue);
    }

    return (
        <div>
            <h1>Welcome {userName}</h1>
            <input type="text" onChange={inputName} />
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default ChangeName