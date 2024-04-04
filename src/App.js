import React, { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  const [score, setScore] = useState(0);

  const createMoleHill = () => {
    const moleHills = [];
    for (let i = 0; i < 9; i++) {
      moleHills.push(
        <MoleContainer key={i} score={score} setScore={setScore} />
      );
    }
    return moleHills;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Whac-a-Mole</h1>
        <div className="MoleHill">{createMoleHill()}</div>
        <div>Score: {score}</div>
      </header>
    </div>
  );
}

export default App;
