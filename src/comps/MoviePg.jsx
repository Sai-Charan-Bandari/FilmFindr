import React, { useContext, useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import {C} from '../App'
import Card from './Card'
import { imgArr } from './Home'

function MoviePg() {
    let {mv,cos,theme}=useContext(C)
    let {index,cindex}=useParams()
    // let index=0
    // let cindex=0
    let [similar,setsimilar]=useState([])
    function recommend(){
        let k = []
        // here e contains index specified by each cos element
        cos[index].forEach((e)=>k.push(e))
        setsimilar(k)
    }
    useEffect(()=>{
        recommend()
    },[])
    
  return (
    <div style={{backgroundImage:`url(${imgArr[cindex]})`,marginTop:0,color:'white',paddingLeft:20}} id='body'>
       <Link to={mv.homepage[index]}><h1>{mv.title[index]}</h1></Link> 
        <h3>{mv.tagline[index]}</h3>
        <h3>Rating : {mv.vote_average[index]}</h3>
        <div>no of votes : {mv.vote_count[index]}</div>
        <div>budget : $ {mv.budget[index]}</div>
        <div>Release Date : {mv.release_date[index]}</div>
        <div>Revenue : $ {mv.revenue[index]}</div>
        <div>Runtime : {mv.runtime[index]} mins</div>
        <div>Status : {mv.status[index]}</div>

<div id='scr' style={{overflow:'scroll',height:'25vh',overflowX:'hidden'}}>
        <h3>Cast</h3>
        {mv.cast[index].map((e,i)=>
        <div key={i}>
        <span style={{marginRight:10}}>{e[0].includes('(voice)') ? e[0].substring(0,e[0].length-7) :e[0] } :</span>
        <span>{e[1]}</span>
        </div>
        )}

        <h3>Crew</h3>
        {Object.entries(mv.crew[index]).map((e,i)=>
        <div key={i}>
        <span>{e[0]}  :  </span>
        <span>{e[1]}</span>
        </div>
        )}

        <h3>Genre</h3>
        <div>
        {mv.genres[index].map((e,i)=>
        <span>{e}</span>
        )}
        </div>

        <h3>Overview</h3>
        <p>{mv.overview[index]}</p>
        <div>Popularity Index : {mv.popularity[index]}</div>

        <h3>Production Company</h3>
        <div>
        {mv.production_companies[index].map((e,i)=>
        <span>{e} , </span>
        )}
        </div>

        <h3>Production Country</h3>
        <div>
        {mv.production_countries[index].map((e,i)=>
        <span>{e} , </span>
        )}
        </div>

        <h3>Languages</h3>
        <div>
        {/* english is common for all  */}
        <span>English , </span>
        {mv.spoken_languages[index].map((e,i)=>
        <span>{e} , </span>
        )}
        </div>
</div>

        <div id='r'>Recommended</div>
        <div id='clist'>
            {similar.map((e,i)=>
                <Card index={e} title={Object.values(mv.title).find((mv,ind)=>ind==e)} voteAvg={mv.vote_average[e] } key={i} cindex={i} />
            )}
        </div>
    </div>
  )
}

export default MoviePg