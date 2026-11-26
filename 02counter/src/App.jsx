import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)

  // let counter=15

  const addvalue=()=>{
    setcounter(counter+1)
  }

  const removevalue=()=>{
    if(counter>0){
    setcounter(counter-1)
    }
    
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addvalue}>Add Value{counter}</button>
    <br/>
    <button onClick={removevalue}>Remove Value{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
