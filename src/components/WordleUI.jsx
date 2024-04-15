import React, { useEffect } from 'react'
import useWordle from "./useWordle"
import Grid from './WordleGrid'
// jsx file 2 of 3
export default function Wordle({ solution }){
    const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution) // Getting information from useWordle.jsx

    useEffect(()=> {
        window.addEventListener('keyup', handleKeyup)

        if(isCorrect){ // Ends the game, prevents input
            console.log('You win')
            window.removeEventListener('keyup', handleKeyup)
        }

        if(turn > 5){
            console.log('out of guesses')
            window.removeEventListener('keyup', handleKeyup)
        }

        return () =>  window.removeEventListener('keyup', handleKeyup) // detaches event listener, prevents a load of event listener
    },[handleKeyup, isCorrect, turn]) // [] is for the handleKeyup and isCorrect dependency

    

    return(
        <>
        <div>The word is - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        </>
    )
}