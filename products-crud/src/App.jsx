import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import EditProduct from './components/EditProduct'
import { AppContext, useAppState } from './app/app'
import Stats from './components/Stats'

function App() {
  const [currentRout, setCurrentRoot] = useState();
  
  useEffect(() => {
    const path = window.location.pathname
    setCurrentRoot(path);
  }, [])

  return (
    <AppContext.Provider value={useAppState()}>
      <BrowserRouter>
        <nav className='p-1 my-3 border border-info col-md-6 offset-md-3'>
          <ul className='nav nav-pills'>
            <li>
              <Link 
                onClick={() => setCurrentRoot("/Home")}
                className={
                  currentRout=='/Home'
                  ?'btn btn-info ms-1'
                  :'btn btn-outline-info ms-1'
                } 
                to={'/Home'}>
                  Home
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setCurrentRoot("/Products")}
                className={
                  currentRout=='/Products'
                  ?'btn btn-info ms-1'
                  :'btn btn-outline-info ms-1'
                }
                to={'/Products'}>
                    Products
              </Link>
            </li>
            <li>
              <Link 
                onClick={() => setCurrentRoot("/newProduct")}
                className={
                  currentRout=='/newProduct'
                  ?'btn btn-info ms-1'
                  :'btn btn-outline-info ms-1'
                }
                to={'/newProduct'}>
                    New Product
              </Link>
            </li>
            <li className='ms-auto'>
              <Stats></Stats>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Products' element={<Products />}></Route>
          <Route path='/newProduct' element={<NewProduct />}></Route>
          <Route path='/editProduct/:id' element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter> 
    </AppContext.Provider>
  )
}

export default App
