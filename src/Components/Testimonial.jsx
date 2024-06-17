import React from 'react';
import Card from './Card';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { useState } from 'react';
function Testimonial(props) {
    let reviews = props.reviews;
    const [Index,setIndex]= useState(0);
    function leftHandler(){
        if(Index - 1 < 0 ){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(Index-1);
        }
    }
    function rightHandler(){
        if(Index + 1 >= reviews.length ){
            setIndex(0);
        }
        else{
            setIndex(Index+1);
        }
    }
    function SurpriceHandler(){
       let randomIndex = Math.floor(Math.random() * reviews.length)
       setIndex(randomIndex)
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
      <Card review = {reviews[Index]}></Card>
      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto place-items-center'>
        <button
        onClick={leftHandler}
        className='cursor-pointer hover:text-violet-500'> 
            <FiChevronLeft/></button> 
        <button 
        onClick={rightHandler}
        className= 'cursor-pointer hover:text-violet-500'> 
            <FiChevronRight/> </button>
      </div>
      <div >
        <button
        onClick={SurpriceHandler}
        className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md text-white text-lg mt-4'> Surprice Me </button>
      </div>
    </div>
  )
}

export default Testimonial
