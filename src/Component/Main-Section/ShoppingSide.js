import React from 'react';
import './ShoppingSide.css';

const ShoppingSide = (props) => {
  const clickedProductArray = props.cart;
  let totalPrice = 0;
  
  for(let product of clickedProductArray){
    totalPrice = totalPrice + product.price;
  }
  return (
    <div className='shopping-side-container'>
      <h2>Order-Summery</h2>
      <h4>Selected-item: {props.cart.length}</h4>
      <h4>Total-Price: ${totalPrice}</h4>
    </div>
  );
};

export default ShoppingSide;