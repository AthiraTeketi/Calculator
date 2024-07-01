import { useState } from 'react';
import './App.css'
import Keypad from './Keypad.js'
function App(){
  let [number,updatedNumber] = useState("")
  function handleClickEvents(value){
     updatedNumber(number+value)
  }

  function Calculation(value){
    console.log(number)
      let OutputVal = eval(number)
        updatedNumber(OutputVal)
  
  }
  function Clear(){
    updatedNumber("")
  }
  return(
    <div className="appHeading" style={{margin:150}}>
    <h1>Calculator Using React </h1>
      <div className='calculatorBox'>
      <input type='' className='inputBox' value={number} />
      <Keypad handleClickEvents={handleClickEvents} Calculation={Calculation} Clear={Clear}/>
      </div>
    </div>
  )
}

export default App;
