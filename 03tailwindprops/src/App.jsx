import Cards from "./components/Cards"
// function App() {

//   let myObj={
//     username:"Harshit Tiwari",
//     age:21
//   }

//   let myArr=[1,2,3,4,5]
//   return (
//     <>
//       <h1 className="inline-block bg-green-400 text-black rounded-xl">
//         Tailwind Test
//       </h1>
//       <Cards channel="chaiaurcode" someObj={myObj} someArr={myArr}/>
//       <Cards/>
      
//     </>
//   )
// }

// export default App


function App() {

  let myObj={
    username:"Harshit Tiwari",
    age:21
  }

  let myArr=[1,2,3,4,5]
  return (
    <>
      <h1 className="inline-block bg-green-400 text-black rounded-xl">
        Tailwind Test
      </h1>
      <Cards username="hitesh chaudhary" btnObj="click me"/>
      
    </>
  )
}

export default App