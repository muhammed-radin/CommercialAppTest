import React, { useEffect, useState } from 'react'
import './Home.css'
import ProductCard from '../components/ProductCard'
import Product from './Product'
import { useOutletContext } from 'react-router'

export default function Home() {

const [products,setProducts]= useState([])
const [loading,setLoading]= useState(true)
const [error,setError]=useState(null)

const { search } = useOutletContext();


useEffect(()=>{
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then((data)=>{
              setProducts(data)
              setLoading(false)
            })
            .catch((err)=>{
              setError("Failed to load")
              setLoading(false)

            })
},[])

if(loading) return <p>Loading...</p>
if(error) return <p>{error}</p>
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );
  return (
    <div className='home_container'>
          <div className='product_list'>
            {
              products.map((product)=>{
                return <ProductCard key={product.id} product={product}/>
              })
            }

          </div>
      </div>
  )
}
