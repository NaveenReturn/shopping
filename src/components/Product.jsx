/* eslint-disable react/prop-types */
// import React from 'react';
import { useContext } from "react";
import "./Product.css";
import { cartContext } from "../App";

export const Product = ({product}) => {

    const {cart,setCart} = useContext(cartContext)

    const name = product.name && product.name.length >21?product.name.substring(0,20)+"..":product.name
  
   const adCart =()=>{
       setCart([...cart,product])
   }
   const removeCart = ()=>{
      setCart(cart.filter((c)=>c.id!== product.id));
   }
    return (
    <div className='product'>
        <div className="img">
             <img src={product && product.images[0]} alt="alter" />
        </div>
         <div className="details">
         <h3>{name}</h3>
        <p>Price :{product.price}</p>
        {cart.includes(product && product)?<button onClick={removeCart} className='btnRemove'>Remove from Cart</button>
        :<button onClick={adCart}>Add to Cart</button>}
         </div>
    </div>
  )
}
