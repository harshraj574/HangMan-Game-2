import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import MyModal from "../components/Modal/Modal";

function PlayGame() {

    const { state } = useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <>
        <div style={{backgroundColor:'#a3a3a3'}}>
        <div style={{display:'flex'}}>
            <div>
            <div>
                <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters}/>
            </div>
            <div>
                 <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
            </div>
            </div>
           
            <div>
                <HangMan step={step} />
            </div>
           </div>
           <MyModal guessedLetters={guessedLetters} step={step} text={state.wordSelected} />

        </div>
            {/* <Link to='/start'  className="text-blue-400">Start Game Link</Link> */}
        </>
    );
}

export default PlayGame;