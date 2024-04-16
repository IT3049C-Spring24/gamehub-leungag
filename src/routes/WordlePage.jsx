import Navigation from "../components/Navigation";
import WordleWord from "../components/WordleWord";

// Main (Parent) component 
function WordlePage(){
    return(
        <>
        <Navigation/>
        <h1>Wordle</h1>
        <WordleWord /> {/*Generates Random words*/}
        
        </>
    )
}

export default WordlePage;