import {useState } from 'react';
import './style/App.css';
import words from './ressources/wordList.json';
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanKeyboard } from './components/HangmanKeyboard';
import { HangmanWord } from './components/HangmanWord';
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetter, setGuessedLetter] = useState<string[]>([]);
  console.log(wordToGuess);

  const addGuessedLetter = (letter: string) => {
      if (guessedLetter.includes(letter.toLowerCase())) return 

      setGuessedLetter(currentLetters => [...currentLetters, letter.toLowerCase()])
  }
  
  const incorrectGuesses = guessedLetter.filter(letter => 
      !wordToGuess.includes(letter)
  )
  const gameOver = incorrectGuesses.length >= 6 ;
  const hasWon = wordToGuess.split("").every(letter => guessedLetter.includes(letter))
  console.log(guessedLetter)

  return (
    gameOver ? (
    <div className="gameOver">
      <h1>HE DIED <br />
       REFRESH TO TRY AGAIN
      </h1>
  </div>
    ) : (
      <div className='App-page'>
        { !hasWon  && <div className="Game-container">
          <HangmanDrawing numberOfIncorrectGuesses={incorrectGuesses.length} />
          <HangmanWord wordToGuess={wordToGuess} guessedLetter={guessedLetter} />
          <HangmanKeyboard addGuessedLetter={addGuessedLetter} letterGuessed={guessedLetter} />
        </div>
        }
        { hasWon &&
          <div className="hasWonSection">
            <h1> You WON!!!<br/>
             REFRESH TO PLAY AGAIN</h1>
          </div>
        }
      </div>
    )

  )
}


export default App
