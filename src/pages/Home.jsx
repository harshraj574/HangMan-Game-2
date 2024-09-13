import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

function Home(){

       const navigation = useNavigate()

    function handleClick(){
        navigation('/start');
    }

    return(
        <>
        <div className="homeClass">

        <div style={{color: 'white'}} className="homeHeader m-52">
            <div >Welcome To HangMan Game</div>
            <Button
             styleType="success"
             text={`Click Here To Play`}
             onClickHandler={handleClick}
             classname="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            />
        </div>

        <div className="homeImg">
                <img src="./src/assets/Images/152241700-6beb6cd4-62e4-4830-84c3-7b67997bae49.jpeg" alt="hello" />
        </div>

        </div>
        
        {/* <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink to Orange</button>          */}
        </>
    )

}

export default Home;