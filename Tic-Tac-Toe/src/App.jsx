import './App.css'

function App() {
  return (
    <center>
      <h1>Welcome To Tic Tac Toe Game</h1>
      
      <div className="container">
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
        <button className="bt1"></button>
      </div>
      <div className='score'>

      </div>
      <div className="winner">

      </div>
      <div className="reset">
        <button id='reset'>Reset</button>
      </div>
      
    </center>
  )
}

export default App
