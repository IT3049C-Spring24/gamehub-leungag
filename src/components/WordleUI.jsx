import React, { useEffect } from 'react'
import useWordle from "./useWordle"
import Grid from './WordleGrid'
// jsx file 2 of 3
export default function Wordle({ solution }){
    const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution) // Getting information from useWordle.jsx

    useEffect(()=> {
        window.addEventListener('keyup', handleKeyup)

        return () =>  window.removeEventListener('keyup', handleKeyup) // detaches event listener, prevents a load of event listener
    },[handleKeyup]) // [] is for the handleKeyup dependency

    useEffect(()=>{
        console.log(guesses,turn,isCorrect)
    }, [guesses, turn, isCorrect]) // Any changes in the value the dependency reruns the function

    return(
        <>
        <div>Solution - {solution}</div>
        <div>currentGuess - {currentGuess}</div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        </>
    )
}