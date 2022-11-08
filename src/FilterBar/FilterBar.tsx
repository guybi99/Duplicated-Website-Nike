import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import "./FilterBar.css";

export function FilterBar(props:{filterTitle:string|undefined}) {
  const navigate=useNavigate();
  const filterByClothing=(()=>{
    
  })
  return (
    <div className='filter'>
      <h1 className='filterTitel'>{props.filterTitle==="New-Rel"?"New Release":props.filterTitle}</h1>
      <ul className="ul">
    <li><button onClick={()=>{navigate(`T-Shirt`)}}>T-Shirt</button></li>
    <li><button onClick={()=>{navigate(`Hat`)}}>Hat</button></li>
    <li><button onClick={()=>{navigate(`Pants`)}}>Pants</button></li>
    <li><button onClick={()=>{navigate(`Shoses`)}}>Shoes</button></li>
    <li><button onClick={()=>{navigate(`Jacket`)}}>Jacket</button></li>
    <li><button onClick={()=>{navigate(`Socks`)}}>Socks</button></li>
    <li><button onClick={()=>{navigate(`Hoodies`)}}>Hoodies</button></li>
      </ul>
    </div>
  )
}