import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className='md:max-w-[80%] mx-auto md:pt-20 pt-14 w-[90%] mb-10'>
      {cart.length > 0 ? (
        <div>
          <h1 className='text-center text-[2rem] font-bold pt-4'>Your Cart</h1>
          <div>
            <div>
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>

            <div className='flex flex-col justify-center items-center p-3 bg-slate-700 text-white'>
              <h2 className='text-xl font-semibold py-1 text-yellow-500'>Summary</h2>
              <p className='font-semibold'>Total Items: <span className='font-medium text-sky-200'>{cart.length}</span></p>
              <p className='font-semibold'>Total Amount: <span className='text-green-500 font-semibold'>${totalAmount.toFixed(2)}</span></p>
              <button className='bg-green-500 px-3 py-2 mb-3 mt-2 font-semibold text-white md:hover:scale-105 transition-all duration-200'>Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center pt-44'>
          <h1 className='text-2xl font-semibold'>Cart is empty</h1>
          <Link className='text-lg px-3 py-2 bg-green-300 mt-3 rounded-md' to="/">Shop Now</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
