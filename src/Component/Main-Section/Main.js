import React, { useCallback, useState } from 'react';
import Card from './Card';
import './Main.css'
import ShoppingSide from './ShoppingSide';

const Main = () => {
  const [cart, setCart] = useState([])
  const mainAddToCard = (product) => {
    const newProduct = [...cart,product];
    setCart(newProduct);
  };
  return (
    <main className='main-container'>
        <Card mainAddToCard = {mainAddToCard}></Card>
        <ShoppingSide cart = {cart}></ShoppingSide>
    </main>
  );
  
};

export default Main;