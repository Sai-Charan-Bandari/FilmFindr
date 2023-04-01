import React, { useContext, useState } from 'react'
import {C} from '../App'
import Card from './Card'

const imgArr={
    0:'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    1:'https://images.pexels.com/photos/1024963/pexels-photo-1024963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    2:'https://images.pexels.com/photos/78783/submachine-gun-rifle-automatic-weapon-weapon-78783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    3:'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    4:'https://images.pexels.com/photos/8273631/pexels-photo-8273631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

function Home() {
    let {mv,theme}=useContext(C)
    // text
    let [v,setv]=useState('')
    // available movies list
    let [available , setavailable]=useState([])

     function findAvailableMovies(){
        let t = Object.entries(mv.title).filter((e)=>e[1].toLowerCase().includes(v.toLowerCase()))
    //  console.log('available movies')
    //  console.log(t)
    setavailable(t.slice(0,10))
     }
     
  return (
    <>
    <div id='body' style={{backgroundImage:`url(${imgArr[theme]})`}}>
        <div id='search' style={{display:'flex',flexDirection:'column'}}>
            <input type="text" value={v} onChange={(e)=>{
                setv(e.target.value);
                findAvailableMovies()
            }}/>
            <button onClick={findAvailableMovies}>Search</button>
        </div>
        <div>
        {available.map((e,i)=>
        <Card index={e[0]} title={e[1]} voteAvg={mv.vote_average[e[0]] } key={i}  cindex={i}/>
        )}
        </div>
    </div>
    </>
  )
}



export default Home