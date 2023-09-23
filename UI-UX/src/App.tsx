import { useState } from 'react'

import './App.css'
import Footer from './Footer'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo exercitationem laudantium quod delectus saepe rem beatae quos ipsa vero molestias, officia aliquid assumenda. Corrupti labore, cupiditate odio vel ut quae?</h1>
      {/* <Footer /> */}
    </div>
  )
}

export default App
