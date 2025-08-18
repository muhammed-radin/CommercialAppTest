import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productData = data.find((product) => product.id == Number(id));
        {
          setProduct(productData);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Failed to load");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product_container">
      {product && (
        <>
          <img src={product.image} alt="" />,
          <div className="product_info">
             <h2>{product.title}</h2>
            <span style={{display:"flex" , gap:"30px"} }>
           
            <h4>${product.price}</h4>
             <h6>${Math.floor(product.price * 1.3)}</h6>
            </span>
           
            <p>{product.description}</p>
           
          </div>
        </>
      )}
    </div>
  );
}
