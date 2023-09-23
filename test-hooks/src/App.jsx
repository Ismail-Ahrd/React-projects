import { useState } from 'react'
import Test from './Test'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App
