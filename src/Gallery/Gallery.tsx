import "./Gallery.css";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { Data,Sale } from "../data";
import {FilterBar} from './../FilterBar/FilterBar';
import { Outlet, useParams } from "react-router-dom";
import {allSales,prodByGender,getNewRel} from "../api"
import { useLocation } from 'react-router-dom'

export function Gallery() {
  const [allData, setAllData] = useState<Data[]|Sale[]>([]); 
  let {Gender}= useParams();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [Gender])
   useEffect(() => {

  let a=  location.pathname.split("/");
      let data;
    const fetchData = async () => { 
      if(Gender===a[a.length-1]&&Gender==="New-Rel"){
        data= getNewRel();
        setAllData(await data);
      }
      else
        if(Gender===a[a.length-1]&&Gender==="Sale")
        {
         data= allSales();
        setAllData(await data);
        }
        else
          if(Gender===a[a.length-1]){
          data= prodByGender(Gender as string);
          setAllData(await data);
        }
      }
        // call the function
  fetchData()
  // make sure to catch any error
  .catch(console.error);
  }, [location.pathname,Gender]);
  return (
    <div className= "gallery">
      <div className="filter">
      <FilterBar filterTitle={Gender} />
      </div>
    <div className="showCards">
    {allData.map((curr, i) => (
          <Card data={curr} key={i} />
        ))}  </div> 
        <Outlet context={{allData,setAllData}}/>    
    </div>
  );
}
