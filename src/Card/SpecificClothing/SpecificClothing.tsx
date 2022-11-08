import React, { useEffect, useState } from 'react'
import {Navigate, useLocation, useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { getspecificClothing, getSpecificClothingForSales } from '../../api';

export default function SpecificClothing() {
   const data:any=useOutletContext();
   const location = useLocation();
   let {Gender,Clothing}= useParams();
   useEffect(()=>{
    const getspecificData=(async()=>{
        try{
            let arr=location.pathname.split("/");
            if(arr[arr.length-2]==="Sale")
            {
                const info= await getSpecificClothingForSales(Gender as string,Clothing as string);
                data.setAllData(info);
            }
            else{
            const info=await getspecificClothing(Gender as string,Clothing as string);
            data.setAllData(info);
            }
           
        }
        catch(err)
        {
            console.log(err)
        }
    })
    getspecificData();
   },[location.pathname])
 
  return (
    <div>
    </div>
  )
}
