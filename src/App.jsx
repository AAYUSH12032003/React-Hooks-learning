import { useState } from 'react'

import './App.css'



function App() {
  
let [counter ,setCounter]= useState(15); // 15 is the default value for counter


 // let counter = 25;

  const addValue = ()=>{
    
     setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
// note only 1 time counter will be updated when clicked on button. becoz all these above will form a batch of commands as they r doing the same job
// and react will render the whole batch of commands once !. so that it don't bring inconsistency in UI.

// for adding 4 directly to counter write : setCounter(counter+4); or write this statement 4 times one below the other : setCounter(prevCounter => prevCounter+1);

    console.log("clicked :", counter);

    if(counter > 25) {
    setCounter(25);
    }
  }


  const removeValue = ()=>{
    
  counter = counter - 1;
  setCounter(counter);
  console.log("current value becomes :", counter);
  if (counter < 0){
    setCounter(0);
    console.log("counter is :", counter);
  }
  }



  return (
    <>
    <h1>coffee aur react</h1>
    <h2>counter value : {counter}</h2>


    <button onClick={addValue}>Add Value {counter}</button>
    <br /><br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer : {counter}</p>
    </>
  )
}

export default App
