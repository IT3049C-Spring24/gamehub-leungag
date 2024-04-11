import Navigation from "../components/Navigation";
import WordleBoard from "../components/WordleBoard";


function WordlePage(){
    return(
        <>
        <Navigation/>
        <h1>Wordle</h1>
        <WordleBoard />
        
        </>
    )
}

export default WordlePage;