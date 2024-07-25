import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };

  return (
    <div className='flex md:flex-row flex-col md:px-20 px-2 md:h-60 items-center bg-white shadow-lg py-5 mb-10'>
      <div className=''>
        <img
          src={item.image}
          alt={item.title}
          className='md:w-40 md:h-45 w-30 h-40 object-contain'
        />
      </div>
      <div className='flex-1 flex-col justify-center items-center md:px-10'>

        <div className='md:px-20'>
          <h2 className='md:text-[1.7rem] text-xl font-semibold text-center py-2'>{item.title}</h2>
          <p className='text-sm text-center'>{item.description.split(" ").slice(0, 20).join(" ") + "..."}</p>
        </div>

        <div className='flex gap-10 justify-center items-center py-3 bg-yellow-200 mt-2'>
          <span className='md:text-[1.7rem] text-xl font-semibold text-green-500' >${item.price}</span>
          <button onClick={removeFromCart} className='text-red-500'>
            <MdDeleteForever size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
