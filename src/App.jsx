
import { useState } from "react";
import { CountContext } from "./Components/Contexts";
import { useContext } from "react";
function App() {

   const [count,setCount] = useState(0);

   //wrap anyone that wants to use the teleported value inside a provider; 
  return (
    <div>
    <CountContext.Provider value={count}>
    <Count setCount={setCount}/>
    </CountContext.Provider>
    </div>
  )
}

function Count({setCount}){

  return(
    <div>
    <CountRenderer/>
    <Button setCount={setCount}/>
    </div>
  )
}
function CountRenderer(){
  const count = useContext(CountContext)
  return(
    <div>
    {count}
    </div>
  )
}

function Button({setCount}){

  const count = useContext(CountContext)
  return(
    <div>
    <button onClick={()=> setCount(count+1)}>+</button>
    <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}
export default App
