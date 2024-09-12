import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

function Home(){

       const navigation = useNavigate()

    function handleClick(){
        navigation('/start');
    }

    return(
        <div style={{backgroundColor:'#374151',color:'white'}}>
             <>
        <div>
            <div>Home : Welcome To HangMan Game</div>
            <Button
             styleType="success"
             text={`Click Here To Play`}
             onClickHandler={handleClick}
            />
        </div>         
        </>
        </div>
       

    )

}

export default Home;