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
    <div id="info">
       <Link to={mv.homepage[index]} style={{color:'lightblue'}}><h1>{mv.title[index]}</h1></Link> 
        <h3>{mv.tagline[index]}</h3>
        <h3 id='rating' style={{marginBottom:5,marginTop:5}}>Rating : {mv.vote_average[index]}</h3>
        <div>no of votes : {mv.vote_count[index]}</div>
        <div>budget : $ {mv.budget[index]}</div>
        <div>Release Date : {mv.release_date[index]}</div>
        <div>Revenue : $ {mv.revenue[index]}</div>
        <div>Runtime : {mv.runtime[index]} mins</div>
        <div>Status : {mv.status[index]}</div>

<div id='scr' style={{overflow:'scroll',height:'25vh',overflowX:'hidden'}}>
        <div style={{padding:10,paddingLeft:0}}>
        {mv.genres[index].map((e,i)=>
        <span className='buds'>{e}</span>
        )}
        </div>

        <details>
        <summary><strong>Cast</strong></summary>
        <div className='summarybody'>
        {mv.cast[index].map((e,i)=>
        <div key={i}>
        <span style={{marginRight:10}}>{e[0].includes('(voice)') ? e[0].substring(0,e[0].length-7) :e[0] } :</span>
        <span>{e[1]}</span>
        </div>
        )}
        </div>
        </details>

        <details>
    <summary><strong>Crew</strong></summary>
    <div className="summarybody">
        {Object.entries(mv.crew[index]).map((e,i)=>
        <div key={i}>
        <span>{e[0]}  :  </span>
        <span>{e[1]}</span>
        </div>
        )} 
        </div>
        </details>

        <details>
    <summary><strong>Overview</strong></summary>
    <div className="summarybody">
        <p>{mv.overview[index]}</p>
        <div>Popularity Index : {mv.popularity[index]}</div>
        </div>
        </details>

        <details>
    <summary><strong>Production Company</strong></summary>
        <div className='summarybody'>
        {mv.production_companies[index].map((e,i)=>
        <span>{e} , </span>
        )}
        </div>
 </details>

        <details>
    <summary><strong>Production Country</strong></summary>
        <div className='summarybody'>
        {mv.production_countries[index].map((e,i)=>
        <span>{e} , </span>
        )}
        </div>
 </details>

        <details>
    <summary><strong>Languages</strong></summary>
        <div className='summarybody'>
        {/* english is common for all  */}
        <span>English , </span>
        {mv.spoken_languages[index].map((e,i)=>
        <span>{e} , </span>
        )}
        </div>
        </details>
</div>

        <div id='r'>Recommended</div>
        <div id='clist'>
            {similar.map((e,i)=>
                <Card index={e} title={Object.values(mv.title).find((mv,ind)=>ind==e)} voteAvg={mv.vote_average[e] } key={i} cindex={i} />
            )}
        </div>
        </div>
    </div>
  )
}

export default MoviePg