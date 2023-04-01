import React from 'react'
import {useNavigate} from 'react-router-dom'

function Card({index,title,voteAvg}) {
    // index used for navigation onclick
 let nav=useNavigate()
  return (
    <button onClick={()=>nav('/movie/'+index)}>
        <h1>{title}</h1>
        <h1>{voteAvg}</h1>
    </button>
  )
}

export default Card