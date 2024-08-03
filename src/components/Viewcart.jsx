/* eslint-disable react/prop-types */
import  { Fragment, useContext, useEffect, useState } from 'react';
import "./Cart.css";
import { cartContext } from '../App';


export const Viewcart = () => {
   const {cart} = useContext(cartContext)
  const [total,setTotal] = useState(0);

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
    },[cart])
  return (
     <Fragment>
      <h1 className='cart-heading'>Cart Products</h1>
        {
          cart.map((product)=>(
            <div className='cart-container' key={product.id}>
            <div className="cart-product">
               <div className="img">
                  <img src={product.images[0]} alt="image" />
               </div>
               <div className="cart-product-details">
                  <h3>{product.name}</h3>
                  <p>Price Rs: {product.price}</p>
               </div>
            </div>
     
         </div>
          ))
        }
    <h2 className='cart-amt'>Total Amount Rs: {total}</h2>
     </Fragment>
  )
}
