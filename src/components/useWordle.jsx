import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // the guess are in an array
    const [history, setHistory] = useState([]) // guess is a string. check for duplicate
    const [isCorrect, setIsCorrect] = useState(false)

    // Format the guess into array of letters
    const formatGuess = () => {

    }


    // update state of guess if it is correct
    // add one turn state
    const addnewGuess = () =>{

    }

    // handle  keyup event and track current guess
    // When user press enter, add new guess
    const handleKeyup = ({ key}) => {
        console.log(key)
    }

    return{turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle