import {useNavigate} from 'react-router-dom'
import React, { useContext} from 'react'
import {C} from '../App'


function Card({index,title,voteAvg,cindex}) {
    // index used for navigation onclick
 let nav=useNavigate()
 let {settheme}=useContext(C)

  return (
    <button onClick={()=>{
        console.log(cindex%5)
        settheme(cindex%5)
        nav('/movie/')} }
    onMouseEnter={()=>{
        console.log(cindex%5)
        settheme(cindex%5)
        }}
        onMouseLeave={()=>settheme(4)}
        >
        <h1>{title}</h1>
        <h1>{voteAvg}</h1>
    </button>
  )
}

export default Card