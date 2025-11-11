import { useState,useEffect } from 'react'
import './Shop.css'
import Card from '../Card/Card';

function Shop() {
    const [products,setproducts]=useState([])
    useEffect(() => {      
    fetch('https://fakestoreapi.com/products?limit=34')
    .then(res=>res.json())   
    .then(data=>setproducts(data))
    }, []);
  return (
    <div className='cards'>
    {
        products.map((product)=>(
          <Card price={product.price} title={product.title} imglink='./product.png'/>
            
        ))
    }
    

   
    </div>
  )
}

export default Shop