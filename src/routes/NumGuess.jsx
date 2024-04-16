import Navigation from "../components/Navigation";
import NumberGuessingGame from "../components/NumberGuess";


function NumberGuessing(){
    return(
        <>
        <Navigation/>
        <h1>Number Guessing</h1>
        <NumberGuessingGame /> {/*Number guessing game */}
        </>
    )
}

export default NumberGuessing;