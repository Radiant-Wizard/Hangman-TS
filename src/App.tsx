import { useState } from 'react';
import './style/App.css';
import words from './ressources/wordList.json';
import { HangmanDrawing } from './components/HangmanDrawing';
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);

  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);


  return (
    <div className='App-page'>
      <div className="Game-container">
        <HangmanDrawing />
      </div>
    </div>
  
  )
}

export default App
