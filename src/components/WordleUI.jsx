import React, { useEffect } from 'react'
import useWordle from "./useWordle"

export default function Wordle({ solution }){
    const {currentGuess, handleKeyup} = useWordle(solution) // Getting information from useWordle.jsx

    useEffect(()=> {
        window.addEventListener('keyup', handleKeyup)

        return () =>  window.removeEventListener('keyup', handleKeyup) // detaches event listener, prevents a load of event listener
    },[handleKeyup]) // [] is for the handleKeyup dependency

    return(
        <div>currentGuess - {currentGuess}</div>
    )
}