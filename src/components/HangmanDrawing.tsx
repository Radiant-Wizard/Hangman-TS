import '../style/HangmanDrawing.css';

const HEAD = (
    <div className="hang-head"/>
)
const BODY = (
    <div className="hang-body"/>
)
const LEFTHAND = (
    <div className="hang-left-hand"/>
)
const RIGHTHAND = (
    <div className="hang-right-hand"/>
)
const LEFTFOOT = (
    <div className="hang-left-foot"/>
)
const RIGHTFOOT = (
    <div className="hang-right-foot"/>
)
const fullBody = [HEAD, BODY, LEFTHAND, RIGHTHAND, LEFTFOOT, RIGHTFOOT] 

type hangmanDrawingProps = {
    numberOfIncorrectGuesses: number
}
export function HangmanDrawing({numberOfIncorrectGuesses}: hangmanDrawingProps){
    return (
        <div className="hang-component">
            {fullBody.slice(0, numberOfIncorrectGuesses)}
            <div className="hang-cord"/>
            <div className="hang-top"/>
            <div className="hang-bar"/>
            <div className="hang-base"/>
        </div>
    )
}