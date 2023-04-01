import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './comps/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MoviePg from './comps/MoviePg'

export const C=createContext()
export const colorArr = {
  4:'lightblue',
  1:'yellow',
  2:'orange',
  3:'red',
  0:'white',
  5:'coral',
  6:'green',
  7:'pink',
  8:'skyblue',
  13:'skyblue',
  9:'lightorange',
  10:'coral',
  11:'goldenrod',
  12:'chocolate',
}

function App() {
  const [mv, setmv] = useState()
  const [cos, setcos] = useState()
  let [theme,settheme]= useState(0)
  
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
    <C.Provider value={{mv,cos,theme,settheme}}> 
  <BrowserRouter>
  <h1 id='title' onClick={()=>{
    let x=document.getElementById('title')
    if(x.innerText[0]=='F')
    x.innerText=' BSC'
    else
    x.innerText='Film Findr'
  }} style={{color:colorArr[theme]}}>Film Findr</h1>

<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/movie/:index/:cindex' element={<MoviePg/>}></Route>
</Routes>
  </BrowserRouter>
    </C.Provider>
  )
}

export default App
