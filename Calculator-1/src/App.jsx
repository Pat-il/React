import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'

function App() {

  return (
    <div className='todoContainer'>
        <Display />
        <ButtonsContainer />
    </div>
  )
}

export default App
