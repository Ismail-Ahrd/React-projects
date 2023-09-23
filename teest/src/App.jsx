import { useState } from 'react'
import './App.css'
import AvatarInfo from './AvatarInfo'
import MainPage from './MainPage'
import Navbar from './Navbar'

function App() {


  return (
    <div className="App">
      <Navbar />
      <MainPage />
      {/* <AvatarInfo /> */}
    </div>
  )
}

export default App
