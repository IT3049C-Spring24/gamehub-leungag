import { useState } from "react"


function WordleBoard() {
    const [solution, setSolution] = useState(null);

    useState(() => { /*Get random word through fetch function*/ 
        fetchRandomWord();
    }, []);

    async function fetchRandomWord() {
        try {
            const response = await fetch('https://it3049c-hangman.fly.dev/');
            if (!response.ok) {
                throw new Error('Failed to fetch random word');
            }
            const data = await response.json();
            console.log(data);
            setSolution(data.word);
        } catch (error) {
            console.error('Error fetching random word:', error);
        }
    }

    return (
        // Page renders here
        <>
            <h1>Wordle Board</h1>
            {solution && <div>Solution is {solution}</div>} 
        </>
    );
}

export default WordleBoard;