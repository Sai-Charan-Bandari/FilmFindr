import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './comps/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MoviePg from './comps/MoviePg'

export const C=createContext()

function App() {
  const [mv, setmv] = useState()
  const [cos, setcos] = useState()
  
  async function get(){
    let x=await fetch('https://sai-charan-bandari.github.io/MovieData/movies.json')
         setmv(await x.json())
         console.log(mv)
     }
  async function get2(){
    let x=await fetch('https://sai-charan-bandari.github.io/MovieData/cos.json')
         setcos(await x.json())
         console.log(cos)
     }

     useEffect(()=>{
       get()
       get2()
     },[])


  return (
    <C.Provider value={{mv,cos}}> 
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/movie/:i' element={<MoviePg/>}></Route>
</Routes>
  </BrowserRouter>
    </C.Provider>
  )
}

export default App
