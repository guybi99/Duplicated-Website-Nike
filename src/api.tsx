import axios from "axios";
import { User } from "./data";

const url= axios.create({
    baseURL:`https://localhost:7040/api`,
    headers:{
        "Content-Type":"application/json ",
    },    
});

export const allSales= async()=>{
    try{
        const {data}=await url.get("/Products/productsAndTheirCAtegory");
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export const prodByGender=async(gender:string)=>{
    try{
        const {data}=await url.get(`/Products/getGender/${gender}`);
        return data;
    }
    catch(err){
        console.log(err);
    }
}


export const getItemDetails=async(val:number)=>{
    try{
        const {data}=await url.get(`/Products/ItemDetails/${val}`);
        return data;
    }
    catch(err){
        console.log(err);
    }

    
}

export const getNewRel=async()=>{
    try{
        const {data}=await url.get(`/Products/New-Rel`);
        return data;
    }
    catch(err){
        console.log(err);
    }
    
}

export const userAut=async(user:User)=>{
    try{
        const {data}=await url.post("/UserDetails/ValidateUser",user);
        return data;
    }
    catch(err){
        throw err;
    }
}
    export const getspecificClothing=async(gender:string,category:string)=>{
        try{
            const {data}=await url.get(`/Products/getGenderAndProd/${gender}/${category}`);
            return data;
        }
        catch(err){
            throw err;
        }
    }
    
    export const getSpecificClothingForSales=async(gender:string,category:string)=>{
        try{
            const {data}=await url.get(`/Products/getSpecificClothingForSales/${gender}/${category}`);
            return data;
        }
        catch(err){
            throw err;
        }
    }




