import { useCallback, useState, useEffect, useRef} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'

// useRef hook


function App() {
  const [length, setlength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if (NumberAllowed) str += "0123456789"
if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
for(let i=0; i<length;i++){
   let char=  Math.floor(Math.random()*str.length)
   pass+=str.charAt(char)
}

setpassword(pass)
  },[length,NumberAllowed,charAllowed] )

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{
  passwordGenerator()
},[length,NumberAllowed,charAllowed,passwordGenerator])

 return (
   <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
       
       <h1 className="text-3xl text-center text-white mb-4">
    Password Generator
  </h1>

     <div className="flex shadow rounded-lg overflow-hidden mb-4">
  <input
    type="text"
    value={password}
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    ref={passwordRef}
  />

  <button 
  onClick={copyPasswordToClipboard}
  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
    Copy
  </button>
</div>

<div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setlength(e.target.value)}}
    />
    <label>Length: {length}</label>
  </div>

  <div className='flex items-center gap-x-1'>

    <input type="checkbox"
    defaultChecked={NumberAllowed}
    id='numberInput'
    onChange={()=>{
      setNumberAllowed((prev)=>!prev)
    }}
    />
      <label htmlFor="numberInput">Numbers</label>
 </div>

  <div className='flex items-center gap-x-1'>

    <input type="checkbox"
    defaultChecked={charAllowed}
    id='characterInput'
    onChange={()=>{
      setcharAllowed((prev)=>!prev)
    }}
    />
      <label htmlFor="characterInput">Characters</label>
 </div>
</div>

      </div>
    </>
)
}

export default App
