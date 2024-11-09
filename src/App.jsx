import { useState } from 'react';
import './App.css'
import GamePage from './components/game-page/GamePage';
import StartGame from './components/start-game/StartGame';



function App() {

  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleIsGameStarted = () =>{
    setIsGameStarted(prev => !prev)
  }

  return (
    <div>
      {isGameStarted ? 
            <GamePage />
            : 
            <StartGame onPlayGame={toggleIsGameStarted}/>
      }

     

    </div>
  )
}

export default App
