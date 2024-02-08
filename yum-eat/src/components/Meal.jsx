import React, { useState } from 'react'
import { mealData } from '../../data/data'
import {BsArrowRight}from 'react-icons/bs'
const Meal = () => {
    const [foods,setFoods] =useState(mealData);
    const filterCategory = (category) => {
        setFoods(
            mealData.filter((item)=>{
                return item.category === category
            })
        )
    }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
    
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
        <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex justify-center md:justify-center my-2">
               <button onClick={()=> setFoods(mealData)}
                className='m-1 py-2 px-10 rounded-2xl border-orange-700 text-white bg-orange-700
               hover:bg-white hover:text-orange-50-700
                hover:text-orange-700'>All</button>
               <button onClick={()=> filterCategory('pizza')}
                className='m-1 py-2 px-10 rounded-2xl border-orange-700 text-white bg-orange-700
               hover:bg-white hover:text-orange-50-700
                hover:text-orange-700'>Pizza</button>
               <button onClick={()=> filterCategory('chicken')}
               className='m-1 py-2 px-10 rounded-2xl border-orange-700 text-white bg-orange-700
               hover:bg-white hover:text-orange-50-700
                hover:text-orange-700'>Chicken</button>
               <button onClick={()=> filterCategory('salad')}
               className='m-1 py-2 px-10 rounded-2xl border-orange-700 text-white bg-orange-700
               hover:bg-white hover:text-orange-50-700
                hover:text-orange-700'>Salad</button>
            </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {
                foods.map(item=>(
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-[330px] h-[200px] 
                        object-cover rounded'/>
                        <div className="flex justify-between py-2 px-4">
                            <p className="font-bold">{item.name}</p>
                            <p className="bg-orange-700 h-18 w-18 text-white py-4 px-2 
                            border-8 rounded-full -mt-10">{item.price}</p>
                        </div>
                        <div className="pl-2 py-4 cursor-pointer">
                            <span className=' items-center 
                            text-indigo-500'>View More
                             <BsArrowRight size={20} className='w-5 ml-2 inline text-black'/>
                            </span>
                           
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meal