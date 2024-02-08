import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { FaGoogleWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';
import { TbTruckReturn } from 'react-icons/tb';

export default function TopNav() {
    const [sideNav, setSideNav] = useState(false);
  return (
    <div className='max-w-[1520] mx-auto flex  justify-between items-center p-4'>
            <div className="flex text-center items-center">
            <div className='cursor-pointer'>
                <div onClick={ () => setSideNav(!sideNav)} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
                </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                Yum <span>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-2 font-bold'>Free</p>
                <p className='p-2 font-bold'>Delivery</p>
            </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200] sm:w[400] lg:w-[500px]'>
                <AiOutlineSearch size={25}/>
                <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search Meals' />
            </div>
            <button className='bg-orange-700 text-white hidden md:flex items-center p-2 rounded-full '>
                <BsFillCartFill size={30}/>Cart
            </button>
            {
                sideNav ? (
                    <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                    onClick={ () => setSideNav(!sideNav)}></div>
                ): ("")
            }
            <div
       className={
        sideNav ? 
        'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'//true
        : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' //false
        }>
            <AiOutlineClose onClick={ () => setSideNav(!sideNav)} size={25}
            className="absolute right-4 top-4 cursor-pointer" />
            <h2 className='text-2xl p-4'>Yum<span className='text-orange-700 font-bold'>Eat</span></h2>

            <nav>
                <ul className='flex flex-col p-4 text-gray-900'>
                    <li className='text-xl py-4 flex'>
                        <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Account
                    </li>
                    <li className='text-xl py-4 flex'>
                        <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full' />
                        Delivery
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full' />
                        My favorite
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdHelp size={25} className='mr-4 text-white bg-black rounded-full' />
                        Help
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Wallet
                    </li>
                </ul>
            </nav>
      </div>
    </div>
  );
}