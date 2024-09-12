import { useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { startTransition, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import MyModal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

function PlayGame() {

    const  [hintText,setHintText] = useState("Click for Hint");
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
     const [isClicked,setIsClicked] = useState(false);

    const { state } = useLocation();
    console.log("letter is",state.wordSelected); //the original word given

    

    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
        console.log(guessedLetters);
    }

    function handleHintClick(){
        let originalTextArray = state.wordSelected.toUpperCase().split('');
        originalTextArray.map((letter)=>{
            if(guessedLetters.includes(letter) == false){
                setHintText(letter);
            }  
        })
        setIsClicked(true);
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
           <div>
            <Button
             onClickHandler={handleHintClick}
             text = {`${hintText}`}
             styleType="warning"
             disabled ={isClicked ? "true" : "false"}
            />
           </div>
           <MyModal guessedLetters={guessedLetters} step={step} text={state.wordSelected} />
        </div>
            {/* <Link to='/start'  className="text-blue-400">Start Game Link</Link> */}
        </>
    );
}

export default PlayGame;