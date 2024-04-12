import { useEffect, useState } from "react"


function WordleBoard(){
    const [solution, setSolution] = useState(null)


    return(
        <>
            <h1>bord</h1> 
            {solution && <div>Solution is {setSolution}</div>}
        </>
    )
}


async function getRandomWord(){
    useState (() => {
        fetch('https://it3049c-hangman.fly.dev/')
            .then(res=> res.json())
            .then(json => {
                console.log(json)
                const wordFetch = json
                setSolution(wordFetch.word)
            })
    })
}



export default WordleBoard