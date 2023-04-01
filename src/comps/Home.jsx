import React, { useContext, useState } from 'react'
import {C} from '../App'
import Card from './Card'
function Home() {
    let {mv}=useContext(C)
    // text
    let [v,setv]=useState('')
    // available movies list
    let [available , setavailable]=useState([])

     function findAvailableMovies(){
        let t = Object.entries(mv.title).filter((e)=>e[1].toLowerCase().includes(v.toLowerCase()))
    //  console.log('available movies')
    //  console.log(t)
    setavailable(t)
     }
     
  return (
    <div>
        <h1>FilmFindr font baron</h1>
        <div style={{display:'flex',flexDirection:'column'}}>
            <input type="text" value={v} onChange={(e)=>{
                setv(e.target.value);
                findAvailableMovies()
            }}/>
            <button onClick={findAvailableMovies}>Search</button>
        </div>
        <div>
        {available.map((e,i)=>
        <Card index={e[0]} title={e[1]} voteAvg={mv.vote_average[e[0]] } key={i}  />
        )}
        </div>
    </div>
  )
}

export default Home