import React, { useContext, useEffect, useState } from 'react'
import {C} from '../App'
import Card from './Card'
import { colorArr } from '../App'

export const imgArr={
    20:'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    13:'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    9:'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600',
    5:'https://images.pexels.com/photos/1024963/pexels-photo-1024963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    6:'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    4:'https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    0:'https://images.pexels.com/photos/8273631/pexels-photo-8273631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ,11:'https://images.pexels.com/photos/1498338/pexels-photo-1498338.jpeg?auto=compress&cs=tinysrgb&w=600'
    ,12:'https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ,10:'https://images.pexels.com/photos/759550/pexels-photo-759550.jpeg?auto=compress&cs=tinysrgb&w=600'
    ,7:'https://images.pexels.com/photos/818563/pexels-photo-818563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ,8:'https://images.pexels.com/photos/673862/pexels-photo-673862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ,3:'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ,2:'https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ,1:'https://images.pexels.com/photos/8388223/pexels-photo-8388223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
     
     useEffect(()=>{
        if(mv)
        setavailable(Object.entries(mv.title).slice(0,10))
     },[mv])
  return (
    <>
    <div id='body' style={{backgroundImage:`url(${imgArr[theme]})`}}>
        <div id='search' style={{display:'flex',flexDirection:'column'}} >
            <input type="text" value={v} style={{backgroundColor:colorArr[theme]}} 
            placeholder='Find me a movie'
            onChange={(e)=>{
                setv(e.target.value);
                findAvailableMovies()
            }}/>
            {/* <button onClick={findAvailableMovies}>Search</button> */}
        </div>
        <div id='r'>Recommended</div>
        <div id='clist'>
        {available.map((e,i)=>
        <Card index={e[0]} title={e[1]} voteAvg={mv.vote_average[e[0]] } key={i} />
        )}
        </div>
    </div>
    </>
  )
}



export default Home