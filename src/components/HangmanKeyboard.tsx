 import "../style/HangmanKeyboardStyle.css";
type hangmanKeyboardProps = {
    letterGuessed: string[]
    addGuessedLetter: (letter: string) => void
}
export function HangmanKeyboard({ addGuessedLetter, letterGuessed } : hangmanKeyboardProps) {
    const letterList: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

    return (
        <div className="hang-keyboard">
            {letterList.map((letter) => (
                <button className={letterGuessed.includes(letter) ? "used-btn" : ''} key={letter} onClick={
                    () => addGuessedLetter(letter) }
                    >{letter.toUpperCase()}
                </button>
            ))}
        </div>
    )
}