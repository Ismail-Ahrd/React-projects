import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createContext, useState } from 'react';
import FetchData from './FetchData';
import State from './State';
import Home from './Home';
import ChangeName from './ChangeName';
import FetchReactQuery from './FetchReactQuery';
import Form from './Form';

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("")

  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
        <Router>
          <div style={{marginBottom : "30px"}}>
            <Link className='link' to={'/'}>Home</Link>
            <Link className='link' to={'/state'}>State</Link>
            <Link className='link' to={'/data'}>FetchData</Link>
            <Link className='link' to={'/data-query'}>FetchReactQuery</Link>
            <Link className='link' to={'/change'}>ChangeName</Link>
            <Link className='link' to={'/form'}>Form</Link>
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/state' element={<State />} />
            <Route path='/data' element={<FetchData />} />
            <Route path='/data-query' element={<FetchReactQuery />} />
            <Route path='/change' element={<ChangeName />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<h1>Page not found</h1>} />
          </Routes>
        </Router>  
      </AppContext.Provider>
    </div>
  );
}

export default App;
