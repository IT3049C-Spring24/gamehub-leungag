import React from "react";
import '../assets/Wordle.css'
// making the square by cycling through the 6 array
export default function Row( {guess, currentGuess}) {
    
    if(guess){ // take each letter in the guess to output in a square. No value then give empty row
        return (
            <div className="row past">
                {guess.map((l,i) => (
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        )
    }

    if(currentGuess){
        const letters = currentGuess.split('')
        return (
            <div className="row current">
                {letters.map((letter, index) =>(
                    <div key={index} className="filled">{letter}</div>
                ))}
                {[...Array(5 - letters.length)].map((value, index) => ( /*Keep sqaure rows in place */
                    <div key={index}></div>
                ))}
            </div>
        )
    }

    return(
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}