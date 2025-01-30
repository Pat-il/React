import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import Display from './components/Display'

function App() {
  return (
    <div className={styles.container}>
      <Display/>
      <ButtonsContainer/>
    </div>
  )
}

export default App
