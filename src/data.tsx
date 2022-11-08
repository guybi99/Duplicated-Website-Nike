export interface Data {
    id:number;
    typeIdProduct:string;
    gender: string;
    size:string;
    color:string;
    amount: number;
    price: number;
    insertDate:string
    pic:string;
}

export interface User {
    email: string;
    password: string;
  };
  

export interface Sale {
    id:number;
    typeIdProduct:string;
    gender: string;
    pic:string;
    discount:number;
    pTitel:string;
    pName:string;
    price: number;
    info:string;
}



// export const data=[{typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"},
// {typeIdProduct:'hat',gender: 'man', size:'l',color:'black',amount: 54,price: 70,insertDate:'2022-07-10',pic:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0767f4cc-7d22-4e7d-9121-cb2f636d4a5c/dri-fit-legacy91-golf-hat-pS53HC.png"},
// {typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"},
// {typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"},
// {typeIdProduct:'hat',gender: 'man', size:'l',color:'black',amount: 54,price: 70,insertDate:'2022-07-10',pic:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0767f4cc-7d22-4e7d-9121-cb2f636d4a5c/dri-fit-legacy91-golf-hat-pS53HC.png"},
// {typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"},
// {typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"},
// {typeIdProduct:'hat',gender: 'man', size:'l',color:'black',amount: 54,price: 70,insertDate:'2022-07-10',pic:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0767f4cc-7d22-4e7d-9121-cb2f636d4a5c/dri-fit-legacy91-golf-hat-pS53HC.png"},
// {typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"},
// {typeIdProduct:'Hoodies',gender: 'man', size:'l',color:'black',amount: 21,price: 50,insertDate:'2022-07-10',pic:"https://cache.mrporter.com/variants/images/43769801097926452/in/w960_q60.jpg"}
// ]
