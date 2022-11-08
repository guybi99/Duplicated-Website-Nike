import React from "react";
import "./NavBar.css";
import {useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate=useNavigate();
  return (
    <div className="navbar">
      <div className="nikeimg">
        <img
        onClick={()=>{ navigate("/")}}
          src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png"
          alt="nikepic"
        />
      </div>
      <div className="tabs">
          <div onClick={()=>{    navigate("/Gallery/New-Rel")}}> New Releases </div> 
          <div onClick={()=>{   navigate("/Gallery/Men")}}>Men </div> 
          <div onClick={()=>{   navigate("/Gallery/Women")}}>Women</div> 
          <div onClick={()=>{   navigate("/Gallery/Kids")}}>Kids</div> 
          <div onClick={()=>{   navigate("/Gallery/Sale")}}>Sale</div> 
      </div>
    
    </div>
  );
}
