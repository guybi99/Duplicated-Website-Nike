import React from 'react'
import "./Home.css";
import {SliderNewSale} from "../SliderNewSale/SliderNewSale"
import { useNavigate } from "react-router-dom";
export  function Home() {
  const navigate=useNavigate();
  return (
    <div className="home">
     <img className="bigPic"
          src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/18413651-69c7-410e-8dc4-1665c31f186f/nike-just-do-it.jpg"
          alt="nikepic"
        />
         <SliderNewSale/> 
         <div className="backto">
         <h1>Back To School Essentials</h1>
         <div className="backtoimg">
       <div className="pic1">
       <p className="text">Get Set Styles</p> 
       <button className="button" onClick={()=>{  navigate("/Gallery/Kids/Shoses")}}>Shop Kids</button> 
       <img 
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/3af27415-3a33-407c-a862-9df15c7f6aab/nike-just-do-it.jpg"
          alt="nikepic"
        />
       </div>
       
        <div className="pic2">
      <p className="text">Lace Up and Play</p> 
       <button className="button"onClick={()=>{  navigate("/Gallery/Kids")}}>Shop All</button> 
        <img 
          src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/7309f51d-fbd4-4ec2-9c4e-0314ee3cdec3/nike-just-do-it.jpg"
          alt="nikepic"
        />
        </div>
         </div>
         </div> 
    </div>
  )
}
