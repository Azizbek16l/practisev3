import { useState,useEffect } from 'react'
import './Shop.css'

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
             <div className="card">
        <div className='card-img'>
            <img src="./product.png" alt="buy card"/>        
        </div>

        <div className='card-info'>
        <h3 className='card-title'>{product.title}</h3>
        <p className='card-price'>{product.price}🪙 <span>| 13 ta qoldi</span></p>
         <button>Sotib olish</button>
        </div>
    </div> 
        ))
    }
    

   
    </div>
  )
}

export default Shop