import "../style/HangmanWord.css"

type hangmanWordProps = {
    wordToGuess: string
    guessedLetter: string[]
}
export function HangmanWord({wordToGuess, guessedLetter}: hangmanWordProps){
    return (
        <div className="hang-word">
             {wordToGuess.split("").map((letter, index) => {
                return (
                    <div key={index} className="hang-letter"> 
                        <div className="letter-container" 
                        style={{visibility: guessedLetter.includes(letter) ? "visible" : "hidden"}}
                        >   
                        {letter.toUpperCase()}
                        </div>
                    </div>
                )
             })}
        </div>
    )
}