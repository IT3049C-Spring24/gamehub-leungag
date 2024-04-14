import { useState, useEffect } from "react"
import Wordle from "./WordleUI";

//fetch word 
function WordleWord() {
    const [solution, setSolution] = useState(null);

    useEffect(() => { /*Get random word through fetch function*/ 
        fetchRandomWord();
    }, []);

    async function fetchRandomWord() {
        try {
            const response = await fetch('https://it3049c-hangman.fly.dev/');
            if (!response.ok) {
                throw new Error('Failed to fetch random word');
            }
            const data = await response.json();
            console.log("The word is: ", data.word);
            setSolution(data.word);
        } catch (error) {
            console.error('Error fetching random word:', error);
        }
    }

    return (
        // Page renders here
        <>
            <h1>Wordle Board</h1>
            {solution && <Wordle solution={solution}/>} {/*Only show when there is a solution */}
        </>
    );
}

export default WordleWord;
