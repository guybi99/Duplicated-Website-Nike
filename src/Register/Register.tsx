import axios, { AxiosError } from "axios";
import React, {useEffect, useState } from "react";
import {FcCheckmark,FcCancel} from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./Register.css";
interface Valid {
  fname: boolean;
  lname: boolean;
  email: boolean;
  month:boolean;
  password: boolean;
  confirmPassword: boolean;
  phone: boolean;
  day: boolean;
  gender:boolean;
  year: boolean;
  submit: boolean;
}
interface InputValue {
  fname: string;
  lname: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  day: string;
  year: string;
}


export function Register() {
  const navigate=useNavigate();
  const [errorMessage,setErrorMessage]= useState("");
  const [formInfo, setFormInfo2] = useState<InputValue>({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    day: "",
    year: "",
  });
  const [Select,setSelect]=useState({
    month:"",gender:""
  })
  const [checkValid, setcheckValid] = useState<Valid>({
    fname: true,
    lname: true,
    email: true,
    password: true,
    confirmPassword: true,
    phone: true,
    day: true,
    year: true,
    month: false,
    gender: false,
    submit: true,
  });

  useEffect(() => {
    
    let counter = 0;
    let flag = true;
    let arrayOfInputs = Object.values(checkValid);
    let arrayOfInputsUI = Object.values(formInfo);
   
    arrayOfInputs.forEach((element) => {
      if (element === true) {
        counter++;
      }
    });
    arrayOfInputsUI.forEach((element) => {
      if (element === "") {
        flag = false;
      }
    });

    if (
      counter === arrayOfInputs.length &&
      flag === true &&
      formInfo.password === formInfo.confirmPassword
    ) {
      setcheckValid({ ...checkValid, submit: false });
    } else if (
      counter === arrayOfInputs.length - 1 &&
      checkValid.submit === false &&
      flag === true &&
      formInfo.password === formInfo.confirmPassword
    ) {
      setcheckValid({ ...checkValid, submit: false });
    } else {
      setcheckValid({ ...checkValid, submit: true });
    }
  }, [formInfo,Select]);
  let f1 = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let value = e.target.value;
    setFormInfo2({ ...formInfo, [e.target.name]: value });
    let flag;
    if (
      (e.target.name === "month" || e.target.name === "gender")
    ) {
      setSelect({...Select,[e.target.name]:e.target.value});
      setcheckValid({ ...checkValid, [e.target.name]: true });
    } else if (
      e.target.validity.valid !== checkValid[e.target.name as keyof Valid] &&
      e.target.name !== "confirmPassword" &&
      e.target.name !== "month" &&
      e.target.name !== "gender"
    ) {
      flag = !checkValid[e.target.name as keyof Valid];
      setcheckValid({ ...checkValid, [e.target.name]: flag });
    } else if (
      e.target.name === "confirmPassword" &&
      e.target.value !== formInfo.password
    ) {
      setcheckValid({ ...checkValid, [e.target.name]: false });
    } else if (
      e.target.name === "confirmPassword" &&
      e.target.value === formInfo.password
    ) {
      setcheckValid({ ...checkValid, [e.target.name]: true });
    }
  };
  const AddUser= async()=>{
   let finalObj= {"fname":formInfo.fname,"lname":formInfo.lname,"email":formInfo.email,
                        "gender":Select.gender,
                        "bdate":`${formInfo.year}-${Select.month}-${formInfo.day}`,
                        "pass":formInfo.password,"phone":formInfo.phone}
    console.log(finalObj);
    try{
     await  axios.post("https://localhost:7040/api/UserDetails",finalObj);
    sessionStorage.setItem("userName", `${formInfo.fname} ${formInfo.lname}`);
    navigate("/")
    }
  catch(err: unknown)
  {
    if (err instanceof AxiosError)
    setErrorMessage(err.response?.data.detail)

    }
  }
  const addSymbol=(typeOfInput:string)=>{
    if(formInfo[typeOfInput as keyof InputValue]!==""&& checkValid[typeOfInput as keyof Valid]) 
    {
      return  <FcCheckmark></FcCheckmark>
      
    }
    else if(formInfo[typeOfInput as keyof InputValue]!=="")
    {
      return  <FcCancel></FcCancel>
    }
  }

  console.log(Select);
  return (
    <div className="form"> 
      <div className='nikeimg'>
        <img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" alt="nikepic" />    
        </div>
      <h1>BECOME A NIKE MEMBER</h1>
      <p>Create your Nike Member profile and get first
         access to the very best of Nike products, inspiration
          and community.</p>
      <form className="theForm">
        <label htmlFor="fName">Name</label>
        <div className="fullName">
     { <div className="iconRightInput">  {addSymbol("fname")}</div>}
          <input
            type="text"
            className="fname"
            value={formInfo.fname}
            name="fname"
            placeholder="First"
            required
            pattern="[a-zA-Z]{2,10}"
            onChange={f1}
          />
        
          <input
            type="text"
            className="lname"
            value={formInfo.lname}
            name="lname"
            placeholder="Last"
            required
            pattern="[a-zA-Z]{2,10}"
            onChange={f1}
          />
          <div className="iconLeftInput">  {addSymbol("lname")}</div>
        </div>
        
          {!checkValid.fname&& (
            <p style={{ color: "red" }}>you need to insert valid first name</p>
          )}
        {!checkValid.lname && (
            <p style={{ color: "red" }}>you need to insert valid last name</p>
          )}
           
        <label htmlFor="fName">Choose your username</label>
        <div className="email">
        <div className="iconRightInput">  {addSymbol("email")}</div>
          <input
            type="email"
            className="email"
            name="email"
            value={formInfo.email}
            placeholder="@gmail.com"
            required
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            onChange={f1}
          />
            </div>
          {!checkValid.email && (
            <p style={{ color: "red" }}>you need to insert valid email</p>
          )}
      
        <label htmlFor="password">Create a password</label>
        <div className="password">
        <div className="iconRightInput">  {addSymbol("password")}</div>
         <input
          type="password"
          className="password"
          name="password"
          value={formInfo.password}
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$"
          onChange={f1}
        />
        </div>
        {!checkValid.password && (
          <div style={{ color: "red", display:"flex" }}>your password invalid - at least one capital letter,lowercase, number and special character 8-11 characters </div>
        )}
        <br />
        <label htmlFor="confirm">Confirm your password</label>
        <div className="confirmPassword">
        <div className="iconRightInput">  {addSymbol("confirmPassword")}</div>
        <input
          type="password"
          className="confirmPassword"
          value={formInfo.confirmPassword}
          name="confirmPassword"
          onChange={f1}
        />
        </div>
        {!checkValid.confirmPassword && (
          <p style={{ color: "red" }}>your confirm password is wrong</p>
        )}
        <br />
        <label htmlFor="birthday">Birthday</label>
        {
          <div className="birthday">
            <div className="iconRightInput">
       {checkValid.month&& <FcCheckmark></FcCheckmark>}
       </div>
            <select
              name="month"
              onChange={f1}
              required
              defaultValue={"month"}
              className="selectButton"
            >
              <option hidden value="month">
                Month
              </option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">Apr</option>
              <option value="05">May</option>
              <option value="06">Jun</option>
              <option value="07">Jul</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            { <div className="iconDay">  {addSymbol("day")}</div>}
            <input
              type="text"
              className="day"
              name="day"
              placeholder="Day"
              min="1"
              max="31"
              onChange={f1}
              required
              pattern="[0-3][0-9]"
            />
           
            { <div className="iconYear">  {addSymbol("year")}</div>}
            <input
              type="text"
              className="year"
              name="year"
              placeholder="Year"
              min="1919"
              max="2022"
              onChange={f1}
              required
              pattern="[1-2]{1}[0-9]{3}"
            />
         
            <br />
          </div>
        }
         {!checkValid.day && (
              <p style={{ color: "red" }}>
                you need to insert valid day
              </p>
            )}
               {!checkValid.year && (
              <p style={{ color: "red" }}>
                you need to insert valid year
              </p>
            )}
        <label htmlFor="gender">Gender</label>
        <div className="divGender">
          <div className="iconRightInput">
          {checkValid.gender&& <FcCheckmark></FcCheckmark>}
       </div>
          <select  defaultValue={"gender"} name="gender" required onChange={f1} className="selectButtonGender">
            <option hidden  >
              Select Gender
            </option >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <br />
        <label htmlFor="phone">Mobile phone</label>
        <div className="phone">
        <div className="iconRightInput">  {addSymbol("phone")}</div>
        <input
          type="tel"
          className="phone"
          value={formInfo.phone}
          name="phone"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange={f1}
        />
        </div>
        {!checkValid.phone && (
          <p style={{ color: "red" }}>you need to insert valid phon number</p>
        )}
        <br />
        <div className="submitButton">
        <input type={"button"} onClick={AddUser} disabled={checkValid.submit} value="Submit" /> <br/>
        {errorMessage!== "" &&
        <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}