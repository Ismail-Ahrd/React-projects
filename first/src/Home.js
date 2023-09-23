import React, { useContext } from 'react';
import { AppContext } from './App';

function Home() {
    const {userName} = useContext(AppContext); 

  return (
    <div>
        <h1>Welcome {userName}</h1>
    </div>
  )
}

export default Home