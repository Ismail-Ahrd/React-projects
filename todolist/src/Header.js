import React, { useState } from 'react';
import './Header.css';
import List from './List';

function Header() {
  let listName;
  const [lists, setLists] = useState([]);

  const addList = () => {
    setLists([...lists,listName]);
  }

  const handleListName = (event) => {
    listName=event.target.value;
  }

  return (
    <div className='container'>
      <div className='header'>
        <input type="text" onChange={handleListName} />
        <button onClick={addList}>Add</button>
      </div>

      <div className="main">
        {lists.map( (list, key) => <List name={list} key={key}/>)}
      </div>
    </div>
    
  )
}

export default Header