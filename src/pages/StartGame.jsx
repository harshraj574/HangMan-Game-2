import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    return (
        <>
        <div style={{backgroundColor: '#374151'}}>
        <h1 style={{color: '#ffffff'}}>Start Game</h1>
        <TextInputFormContainer />
        </div>
            {/* <Link to='/play'  className="text-blue-400">Play Game Link</Link> */}
        </>
    )
}

export default StartGame;