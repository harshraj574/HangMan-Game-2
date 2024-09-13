import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Img1 from "../assets/Images/down.jpeg";

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
                <img src={Img1} alt="hello" />
        </div>

        </div>
        
        {/* <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pink to Orange</button>          */}
        </>
    )

}

export default Home;