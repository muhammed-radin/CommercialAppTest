import React from 'react'
import './ProductCard.css'
import { useNavigate, useParams } from 'react-router-dom'
export default function ProductCard({product}) {
    const navigate =useNavigate()
   
const getId = ()=>{
    console.log(product.id)
    navigate(`/product/${product.id}`)
}

  return (
    <div className='ProductCard_container' onClick={getId} >
    <img src={product.image} alt="" />
        <h4 className='product_title'>{product.title.slice(0,40)}</h4>
        <p className='price'>{product.price}</p>
    </div>
  )
}
