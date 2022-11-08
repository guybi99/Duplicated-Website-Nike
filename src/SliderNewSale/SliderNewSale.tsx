import { useEffect, useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./SliderNewSale.css"
import {allSales} from "../api"
import { Sale } from '../data';
import { useNavigate } from 'react-router-dom';

export const  SliderNewSale = () => {
    const navigate=useNavigate();
const [sales,setSales] =useState<Sale[]>([]);
    useEffect(()=>{
        const getSales=(async()=>{
           let data= allSales();
           setSales(await data);
        })
        getSales()
    },[])

    return (
      <div className="slide-container">
        <h1>New Sales</h1><br/>
        <Fade>
         {sales&&sales.map((x, index)=> {
            return <div key={index} className="slide"> <div  key={index}>
              <img onClick={()=>{   navigate(`/Item/${sales[index].id}`)}}alt={"pic"} className='image-container' src={x.pic} >
              </img>
              <p className='picSlide'>{x.discount+"% discount"}</p>
              </div>
              {index+1>= sales.length?
              <div>
             <img className='image-container'alt={"pic"} onClick={()=>{   navigate(`/Item/${sales[0].id}`)}} src={sales[0].pic} >
              
              </img>
              <p className='picSlide'>{x.discount+"% discount"}</p>
              </div>:<div>
             <img className='image-container'alt={"pic"} onClick={()=>{   navigate(`/Item/${sales[index+1].id}`)}} src={sales[index+1].pic} >
              </img>
              <p className='picSlide'>{sales[index+1].discount+"% discount"}</p>
              </div>}
            </div>
          })} 
        </Fade>
      </div>
    )
}