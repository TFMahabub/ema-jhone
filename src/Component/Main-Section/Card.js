import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Card.css'

const Card = (props) => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProduct(data))
  }, [])
  const addToCard = (product) => props.mainAddToCard(product);
  return (
    <div className='card-container'>
      {
        products.map(product => <Product 
          key={product.id} 
          product ={product} 
          addToCard = {addToCard}></Product>)
      }
    </div>
  );
};

export default Card;