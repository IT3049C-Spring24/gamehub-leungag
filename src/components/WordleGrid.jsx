import React from "react";
import Row from "./RowWordle.jsx"

export default function Grid({currentGuess,guesses,turn}) {
    return(
        <div>
            {guesses.map((guess, index)=> {
                if (turn === index){ /* Output current guess on a row matching the turn*/
                    return <Row key={index} currentGuess={currentGuess}/>
                }
                return <Row key={index} guess={guess}/>
            })}
        </div>
    )
}