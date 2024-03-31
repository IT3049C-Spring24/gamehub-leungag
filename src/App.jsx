import { useState } from 'react'
import './App.css'
import { WelcomeScreen as Welcome } from './screens/WelcomeScreen'
import Game from './screens/GameScreen'

function App() {
  const [name, setName] = useState(`Bearcat`)
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <>
      <div>
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          <h1>Rock Paper Scissors</h1> 
      </div>
      {
        gameStarted
        ? <Game name={name}/>
        : <Welcome name={name} onNameChange={setName} onGameStart={() => setGameStarted(true)}/>
      }
    </>
  )
}

export default App
