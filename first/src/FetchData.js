import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from './App';
import Axios from 'axios';

function FetchData() {
  const {userName} = useContext(AppContext); 
  const [excuse,setExcuse] = useState("");
  const [name, setName] =useState("");
  const [data, setData] =useState(null);
  useEffect(()=>{
    fetchExcuse();
  },[])
  // const fetchExcuse = () => {
  //   fetch("https://excuser-three.vercel.app/v1/excuse/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data[0].excuse);
  //     }) 
  // }

  const fetchExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse/")
    .then((res)=>{
      setExcuse(res.data[0].excuse);
    })
  }

  const getName = (event) => {
    setName(event.target.value);
  }

  const fetchAge = () => {
    Axios.get("https://api.agify.io/?name="+name)
    .then((res)=>{
      setData(res.data);
    })
  }

  
  
  return (
    <div>

      <h1>Welcome {userName}</h1>

      <div>
      <button onClick={fetchExcuse}>Generate</button>
      <p>{excuse}</p>
      </div>

      <div>
        <input type="text" onChange={getName} />
        <button onClick={fetchAge}>Predict Age</button>
        <p>{data !== null ? `Predected age of ${data.name} : ${data.age}` : ""}</p>
      </div>
      
    </div>
  )
}

export default FetchData