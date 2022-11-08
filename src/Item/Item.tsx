import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {getItemDetails, prodByGender} from "../api"
import { Sale } from '../data';
import "./Item.css";
export default function Item() {
  let navigate=useNavigate();
  let [details,setDetails]=useState<Sale>();
  let [moreProds,setMoreProds]=useState<Sale[]>([]);
    let {itemId}= useParams();

    useEffect(()=>{
      window.scrollTo(0, 0)
      const getItem=async()=>{
    let data=await getItemDetails(Number(itemId));
    setDetails(data[0]);
    }
    getItem();
    },[navigate])


    useEffect(()=>{
    
      const getItems=async()=>{
    let data=await prodByGender(details?.gender as string);
    getArrayOfRecommand(data)
      }
    getItems();
    
  },[details])

const getArrayOfRecommand=((data:Sale[])=>{
   const recommendItems:Sale[]=[]
  data=data.filter((x:Sale)=>{
    return x.id!==details?.id
    })
    var arr = [];
    if(data.length>3)
    {
    while(arr.length < 3){
        var r = Math.floor(Math.random() * data.length) ;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    arr.map((x)=>{
      recommendItems.push(data[x])
     })
    setMoreProds(recommendItems);
  }
  else{
    setMoreProds(data);
  }
    })
  return (
    <div className='item'>
      <div className='ImgAndInfo'>
      <div className='divImg'>
        <img src = {details?.pic} alt="ItemPic" />
      </div>
      <div className='divInfo'>
         <h3 className="titel">{details?.pTitel}</h3>
        <h4>{details?.pName}</h4>
        <h4>{details?.typeIdProduct}</h4> 

        {(details?.discount) ?
            <h4 className="changeColor">{(details?.price) && "₪"+details?.price}</h4>:
            <h4>{(details?.price) && "₪"+details?.price}</h4>}
            <h4>{(details?.discount)?"After Discount: " +"₪"+parseInt(details?.price*(1-details?.discount/100 )+ ""):""}</h4>
        <br />
        <h4>{details?.info}</h4>
       
      </div>
      </div>
      <div className='suggestionDiv'>
      <h2 className='title'>Also can interest you:</h2>
      <div className='suggestionItems'>
        {moreProds.map((prod,index)=>{
          return <div className='ItemSuggest' key={index} onClick={()=>{navigate(`/Item/${prod.id}`)}}>
          <div>
        <img className='ImgS' src = {prod?.pic} alt="" />
       
        </div>
          <div className='infoSuggestItem'>
        <h4>{prod?.pName}</h4>
        <h5 style={{color:"gray"}}>{prod?.typeIdProduct}</h5> 
        <h5>{(prod?.price) && "₪"+prod?.price}</h5>
        </div>
        </div> 
        })}
         
         
      </div>
      </div>
    </div>
  )
}
{/* <div className='ItemSuggest'>
        <div>
      <img className='ImgS' src = {details?.pic} alt="" />
     
      </div>
        <div className='infoSuggestItem'>
      <h4>{details?.pName}</h4>
      <h5 style={{color:"gray"}}>{details?.typeIdProduct}</h5> 
      <h5>{(details?.price) && "₪"+details?.price}</h5>
      </div>
      </div>   */}