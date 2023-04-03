import {useNavigate} from 'react-router-dom'
import React, { useContext} from 'react'
import {C} from '../App'
import { colorArr } from '../App'

const genreArr={
    'Science Fiction':7,
    'Thriller':1,
    'Crime':8,
    'Fantasy':9,
    'Western':10,
    'Comedy':11,
    'Music':12,
    'Animation':13,
    'Drama':2,
    'Family':2,
    'Adventure':3,
    'Horror':4,
    'Romance':5,
    'Action':6,
    'Chill':0
}

function Card({index,title,voteAvg}) {
    // index used for navigation onclick
 let nav=useNavigate()
 let {settheme,mv}=useContext(C)
    let cindex=0
    cindex=genreArr[Object.values(mv.genres[index]).slice(-1)]
    // console.log('cindex is ',cindex)

  return (
    <button id='card' 
    onClick={()=>{
        console.log(cindex)
        // console.log(mv.cast[index])
        settheme(cindex)
        nav('/movie/'+index+'/'+cindex)} }
    onMouseEnter={()=>{
        console.log(cindex)
        settheme(cindex)
        }}
        // onMouseLeave={()=>settheme(4)}
        >
        <div style={{backgroundImage:`linear-gradient(${colorArr[cindex]},${colorArr[cindex]},white)`}}>
        <h2>{title}</h2>
        </div>
        <h1>{voteAvg}</h1>
    </button>
  )
}

export default Card