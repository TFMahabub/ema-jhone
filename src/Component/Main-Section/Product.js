import React from 'react';
import './Product.css'

const Product = (props) => {
  // console.log(props.addToCard)
  const {img, name, price, seller, ratings} = props.product;
  return (
    <div className='product-box'>
      <div className='img'>
        <img src={img} alt="" />
      </div>
      <div className='product-info'>
        <h3>{name}</h3>
        <h4>Price: ${price}</h4>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => props.addToCard(props.product)}>Add To Card</button>
    </div>
  );
};

export default Product;