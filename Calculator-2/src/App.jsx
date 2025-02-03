import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C')
    {
      setCalVal("");
    } else if(buttonText === '=')
    {
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayVal = calVal + buttonText;
      setCalVal(newDisplayVal);
    }
  }

  return (
    <div className={styles.container}>
      <Display displayValue={calVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
