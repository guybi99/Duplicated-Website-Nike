
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterBar.css';

export  function RegisterBar() {
let navigate = useNavigate();
const [userName,setUserName]=useState("");
useEffect(()=>{
  setUserName(sessionStorage.getItem("userName") as string);
  },[sessionStorage.getItem("userName")])
  const SignInOrOut=()=>{

    if(!userName){
      { navigate("/Sign-In")};
    }
    else{
      sessionStorage.clear()
      navigate("/");
    }
   
  }
  return (
    <div className='registerbar'>
        <div className='thegoatimg'>
        <a href="https://www.nike.com/il/jordan"><img src="https://w7.pngwing.com/pngs/164/886/png-transparent-jumpman-t-shirt-air-jordan-nike-logo-michael-jordan-physical-fitness-hand-logo-thumbnail.png" alt="the goat pic" /> </a>
        </div>
        {userName? <div className='userName'>Hey {"  " +userName}</div> :<div className='userName'>Hey Guest</div>}
        <div className='rightbar'>
            <button>Help  |</button>   
            <button onClick = {()=>{ navigate("/Register")}}> Join Us  |</button> 
            {<button onClick={SignInOrOut}>{userName?"Log Out":"Sign In"}</button>}
        </div>
    </div>
  )
}
