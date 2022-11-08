import { AxiosError } from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userAut } from '../api';

import "./Login.css";
interface Valid {
  email: boolean;
  password: boolean;
}
interface User {
  email: string;
  password: string;
};

export  function Login() {
    const navigate=useNavigate();
    const [error,seterror] = useState("");
    const [login,setLogin] = useState<User>({email:"",password:""});
    const [checkValid, setCheckValid] = useState({
 
    email: true,
    password: true,
  });
  const getInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setLogin({ ...login, [e.target.name]: e.target.value});
    console.log("check "+e.target.validity.valid)
    if(e.target.validity.valid !== checkValid[e.target.name as keyof Valid]){
      setCheckValid({ ...checkValid, [e.target.name]: !checkValid[e.target.name as keyof Valid]});
    }
    else if(e.target.value === ""||e.target.validity.valid){
      setCheckValid({ ...checkValid, [e.target.name]: true});
    }
  };


  const loginUser = ()=>{
    const authentication=(async()=>{
        try{
        console.log(login)
        const data=await userAut(login);
        console.log(data);
        sessionStorage.setItem("userName",data);
        navigate("/");
        }
        catch(err:unknown)
        {
            if (err instanceof AxiosError)
            seterror(err.response?.data.detail)
        }
    })
    authentication()
  }

  return (
    <div className="login">
         <div className="form">
      <div className='nikeimg'>
        <img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" alt="nikepic" />    
        </div>
      <h1>YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
      {error&& <h4 style={{ color: "red",textAlign:"center" }}>{error}</h4>}
      <form className="theForm">
        <div className="email">
          <input
            type="email"
            className="email"
            name="email"
            value={login.email}
            onChange={getInput}
            placeholder="Email address"
            required
            pattern="^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}(\.[a-zA-Z]{2,4})*$"
          />
           </div>
          {!checkValid.email && (
            <h4 style={{ color: "red", textAlign:"center" }}>you need to insert valid email</h4>
          )}
         
       
        <br />
        <div className="password">
        <input
          type="password"
          className="password"
          name="password"
          placeholder="Password"
          value={login.password}
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$"
          onChange={getInput}
        />
        </div>
        {!checkValid.password && (
            <h4 style={{ color: "red", textAlign:"center" }}>you need to insert valid password</h4>
          )}
        
        <p>By logging in, you agree to Nike's <u>Privacy Policy </u> and <u> Terms of Use</u>.</p>
        
        <div className="submitButton">
        <input type={"button"}onClick={loginUser}  value="Sign In" /> <br/>
        </div>
      </form>
    </div>
    </div>
  )
}



