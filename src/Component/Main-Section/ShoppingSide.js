import React from 'react';
import './ShoppingSide.css';

const ShoppingSide = (props) => {
  const clickedProductArray = props.cart;

  let totalPrice = 0;
  let totalShippingCharge = 0;
  let tax = 0;
  //to get all single product-
  for(let product of clickedProductArray){
    totalPrice = totalPrice + product.price;
    totalShippingCharge = totalShippingCharge + product.shipping;
    tax = parseFloat((totalPrice * 0.1).toFixed(2));
    console.log(tax)
  }
  //sum all the price-
  let grandTotal = totalPrice + totalShippingCharge + tax;
  return (
    <div className='shopping-side-container'>
      <h2>Order-Summery</h2>
      <h4>Selected-item: {props.cart.length}</h4>
      <h4>Total-Price: ${totalPrice}</h4>
      <h4>Total Shipping Charge: ${totalShippingCharge}</h4>
      <h4>Tax: ${tax}</h4>
      <h3>Grand-Total: ${grandTotal}</h3>
    </div>
  );
};

export default ShoppingSide;