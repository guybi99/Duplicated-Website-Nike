import "./Card.css"
import { Data,Sale } from "../data";
import { useNavigate } from "react-router-dom";
export function Card(props: { data: Data|Sale}) {
    const { data } = props;
    const navigate=useNavigate();
    return (
        <div className="card" onClick={()=>{   navigate(`/Item/${data.id}`)}}>
            <img src={data.pic} alt="pic" /> 
            <h3>{data.typeIdProduct}</h3>
            <h4>{("pTitel" in data) &&data.pTitel}</h4>
            <h4>{("pName" in data) &&data.pName}</h4>
            {("discount" in data) ?
            <h4 className="changeColor">{("price" in data) && "₪"+data.price}</h4>:
            <h4>{("price" in data) && "₪"+data.price}</h4>}
            <h4>{("discount" in data)&&"After Discount: " +"₪"+parseInt(data.price*(1-data.discount/100)+"")}</h4>
            
        </div>
    )
}