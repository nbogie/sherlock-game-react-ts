import { useState } from 'react';
import './App.css';
import { MemoryRingGame } from './components/MemoryRingGame';
import { NumberOfPlayers } from './gameCore/types';
import { LobbyControls } from './LobbyControls';

function App() {
  const [numOfPlayers, setNumOfPlayers] = useState<NumberOfPlayers>(2);
  const [gameStarted, setGameStarted] = useState(false);

  function handleStartGame(n: NumberOfPlayers) {
    setNumOfPlayers(n);
    setGameStarted(true);

  }
  return (
    <div className="App">
      {
        gameStarted ?
          <MemoryRingGame numPlayers={numOfPlayers} />
          :
          <LobbyControls startGame={handleStartGame} />
      }
    </div>
  );
}
export default App;
