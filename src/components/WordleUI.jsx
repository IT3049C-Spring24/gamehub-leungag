import React, { useEffect } from 'react'
import useWordle from "./useWordle"

export default function Wordle({ solution }){
    const {currentGuess, handleKeyup} = useWordle(solution) // Getting information from useWordle.jsx

    useEffect(()=> {
        window.addEventListener('keyup', handleKeyup)

        return () =>  windows.removeEventListenter('keyup', handleKeyup) // detaches event listener
    },[handleKeyup]) // dependency

    return(
        <div>Wordle</div>
    )
}