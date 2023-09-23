import { useEffect, useRef, useState } from 'react'

const Test = () => {
    const [state, setState] = useState("")
    const inputRef = useRef();
    const count = useRef(0)
    const ref = useRef("")
    useEffect(() => {
        console.log("render");
        return () => {
            console.log("finish");
        }
    })

    const click = () => {
        console.log("Clicked");
        console.log(ref.current);
        console.log(inputRef.current);
    }

    const handleChange = (event) => {
        // console.log(event);
        // setState(event.target.value);
        ref.current=event.target.value
    }

    const increamentCount = () => {
        count.current = count.current +1
        console.log(count.current);
    }
  return (
    <div>
        <input ref={inputRef} onChange={handleChange} type="text" />
        <button onClick={click}>A</button>
        <button onClick={increamentCount}>++</button>
        {count.current}
    </div>
  )
}

export default Test