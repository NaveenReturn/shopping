/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import { Product } from './Product';
import "./Home.css"

export const Home = () => {

    const [products,setProducts] = useState()
    async function getAllProduct(){
      
      const data = await fetch(`https://dummyjson.com/products`);
      const getAllData = await data.json();

      const dataValue = getAllData.products;
      // console.log(dataValue);
      setProducts(dataValue)
    }
   
    useEffect(()=>{
       return ()=>getAllProduct() 
    },[])
    //  console.log(product)
  return (
    <div className='product-container'>
      {products && products.map((product)=>(
         <Product key={product.id} product={product}
          
         />
      ))}
    </div>
  )
}
