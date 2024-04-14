import React, { useEffect } from 'react'
import useWordle from "./useWordle"
// jsx file 2 of 3
export default function Wordle({ solution }){
    const {currentGuess, handleKeyup} = useWordle(solution) // Getting information from useWordle.jsx

    useEffect(()=> {
        window.addEventListener('keyup', handleKeyup)

        return () =>  window.removeEventListener('keyup', handleKeyup) // detaches event listener, prevents a load of event listener
    },[handleKeyup]) // [] is for the handleKeyup dependency

    return(
        <>
        <div>Solution - {solution}</div>
        <div>currentGuess - {currentGuess}</div>
        </>
    )
}