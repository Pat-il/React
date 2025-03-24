import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (event) => {
    if(event.target.innerText === 'C')
    {
      setCalVal("")
    }
    else if(event.target.innerText === '=')
    {
      let result = eval(calVal);
      setCalVal(result);
    }
    else
    {
      let result = calVal + event.target.innerText;
      setCalVal(result);
    }
  }

  return (
    <div className='todoContainer'>
        <Display displayValue={calVal}/>
        <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
