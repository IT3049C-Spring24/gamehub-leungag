import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // the guess are in an array
    const [history, setHistory] = useState(['hello']) // guess is a string. check for duplicate
    const [isCorrect, setIsCorrect] = useState(false)

    // Format the guess into array of letters
    const formatGuess = () => {
        let solutionArray = [...solution] // turn the array into individual letters
        let formattedGuess = [...currentGuess].map((l)=>{
            return {key: l, color:'grey'}

        })

        // find any green letter position
        // l - letter object, i - index
        formattedGuess.forEach(( l , i) => {
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        // yellow letter position
        formattedGuess.forEach((l,i) =>{
            if(solutionArray.includes(l.key) && l.color !== 'green'){ // check if letter is part of the word anywhere
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null // set that specific letter to null
            }
        })
        return formattedGuess
    }


    // update state of guess if it is correct
    // add one turn state
    const addnewGuess = () =>{

    }

    // handle  keyup event and track current guess (input for keyboard)
    // When user press enter, add new guess
    const handleKeyup = ({ key }) => {
         
        if(key === 'Enter'){
            // only add guess if turn is less than 5
            if (turn > 5){
                console.log('you used all your guesses')
                return
            }
            //do not allow duplicate words
        if(history.includes(currentGuess)){ // if true look at history and not add the word
            console.log('You already tried that word')
            return
        }
            // check word for 5 char
        if(currentGuess.length !== 5){
            console.log('word must be five chars long')
            return
        }
        const formatted = formatGuess() // function called if the 3 if-statement above are bypassed
        console.log(formatted)
        }

        if(key ==='Backspace'){ // delete input wiht backspace
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return // prevents it going to other if-statement from checking condition
        }
        

        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return{turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWordle