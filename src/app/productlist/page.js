"use client"
import { useEffect, useState } from "react"

export default function Productlist () {

    const [product,setProduct] = useState([]);

    useEffect(async()=>{
        let data =await fetch("https://dummyjson.com/products");
        data =await data.json();
        console.log(data);
        setProduct(data.products);
    },[]);
    return (
        <>
        <h1>Product List</h1>
        {
            product.map((item)=>(
                <h1>NAME : {item.title}</h1>
            ))
        }
       </>
    )
}