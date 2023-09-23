import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import  Axios  from 'axios';
import { AppContext } from './App';

function FetchReactQuery() {
    const {userName} = useContext(AppContext);
    const {data, isLoading, isError, refetch} = useQuery(["excuse"],() => {
        return Axios.get("https://excuser-three.vercel.app/v1/excuse/").then((res) => res.data)
    })

    if(isError){
        return <h1>Error!</h1>
    }

    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return (
        <div>
            <h1>Wecome {userName} </h1>
            <h3>{data ? data[0].excuse : "" }</h3>
            <button onClick={refetch}>Update Data</button>
        </div>
    )
}

export default FetchReactQuery