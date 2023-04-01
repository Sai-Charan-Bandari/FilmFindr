import React, { useContext, useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import {C} from '../App'
import Card from './Card'
import { imgArr } from './Home'

function MoviePg() {
    let {mv,cos,theme}=useContext(C)
    // let {index,cindex}=useParams()
    let index=0
    let cindex=0
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
    <div style={{backgroundImage:`url(${imgArr[cindex]})`}} className='body'>
        <h1>{mv.title[index]}</h1>
        <h3>{mv.tagline[index]}</h3>
        <h3>{mv.vote_average[index]}</h3>
        <h3>{mv.vote_count[index]}</h3>
        <h3>{mv.budget[index]}</h3>

        {mv.cast[index].map((e,i)=>
        <div key={i}>
        <span>{e[0]}</span>
        <span>{e[1]}</span>
        </div>
        )}

        {Object.entries(mv.crew[index]).map((e,i)=>
        <div key={i}>
        <span>{e[0]}</span>
        <span>{e[1]}</span>
        </div>
        )}

        <div>
        {mv.genres[index].map((e,i)=>
        <span>{e}</span>
        )}
        </div>

        <Link>homepg : {mv.homepage[index]}</Link>
        <p>{mv.overview[index]}</p>
        <div>{mv.popularity[index]}</div>

        <div>
        {mv.production_companies[index].map((e,i)=>
        <span>{e}</span>
        )}
        </div>

        <div>
        {mv.production_countries[index].map((e,i)=>
        <span>{e}</span>
        )}
        </div>

        <div>{mv.release_date[index]}</div>
        <div>{mv.revenue[index]}</div>
        <div>{mv.runtime[index]} mins</div>
        <div>{mv.status[index]}</div>

        <div>
        {/* english is common for all  */}
        <span>English</span>
        {mv.spoken_languages[index].map((e,i)=>
        <span>{e}</span>
        )}
        </div>

        <div id='clist'>
            {similar.map((e,i)=>
                <Card index={e} title={Object.values(mv.title).find((mv,ind)=>ind==e)} voteAvg={mv.vote_average[e] } key={i} cindex={i} />
            )}
        </div>
    </div>
  )
}

export default MoviePg