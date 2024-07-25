import React from 'react';
import { IoMdCart } from "react-icons/io";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className=''>
      <div className='flex flex-row justify-between  max-w-full md:max-w-[80%] md:mx-auto bg-black md:px-10 px-5 py-3 fixed left-0 right-0 z-20'>
        <NavLink to="/">
          <p className='md:text-[2.4rem] md:font-bold text-[1.3rem] font-semibold text-green-500'>ApniDukan</p>
        </NavLink>
        <div className='flex gap-3 justify-center items-center md:text-[1.5rem]'>
          <NavLink to="/">
            <p className='font-semibold md:text-[1rem] text-[.9rem] text-white hover:text-green-400 transition-all duration-200 hidden md:block'>Home</p>
          </NavLink>
          <NavLink to="/cart">

            <div className='text-white relative xl:hover:text-green-400 transition-all duration-200 '>
              <IoMdCart className='w-9 h-7 xl:hover:scale-110'/>
              {
                cart.length > 0 &&
                <span className='text-white absolute flex justify-center items-center -top-2 -right-2 text-sm bg-green-400 w-5 h-5 text-center rounded-full'>{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
