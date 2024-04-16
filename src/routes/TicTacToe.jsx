// Home page of the TicTacToe

import Navigation from "../components/Navigation";
import Game from "../components/Board";


function TicTacToe(){
    return(
        <>
        <Navigation/>
        <h1>TicTacToe</h1>
        <Game /> {/*TicTacToe Board game */}
        </>
    )
}

export default TicTacToe;