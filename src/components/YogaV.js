import React from 'react';
import nam from '../assests/picka.mp4';
import bea from '../assests/oila.mp4';
import athome from '../assests/polia.mp4';
import vidd from '../assests/vidd.mp4';
import oola from '../assests/oola.mp4';
import pexe from '../assests/pexe.mp4';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const Yoga = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className='max-w[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='font-normal text-5xl text-slate-800'>The Ultimate Mind and Body Exercise </h1><br></br>
        <p className='py-4 h-3 text-2xl'> Simple and easy yoga postures</p>
        <br></br>
        <br>
        </br>
        <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-white/80 shadow-xl">
        <div className='relative flex items-center rounded-lg'>
        <FaChevronCircleLeft className='opacity-50 text-white cursor-pointer hover:opacity-100'  onClick={slideLeft} size={50} />
        <div id='slider' className='w-full h-full content-evenly place-content-evenly overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-center snap-proximity'>
        
            <video className='md:w-auto h-80 gap-2 object-cover inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300 ' 
            src={nam}
            controls
             />
            <video className='md:w-auto h-80 object-cover gap-2 inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300' 
            src={bea}
            controls
             />
             <video className='md:w-auto h-80 object-cover gap-2 inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300' 
            src={pexe}
            controls
             />
             <video className='md:w-auto h-80 object-cover gap-2 inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300' 
            src={athome}
            controls
             />
              <video className='md:w-auto h-80 object-cover gap-2 inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300' 
            src={vidd}
            controls
             />
             <video className='md:w-auto h-80 object-cover gap-2 inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300' 
            src={oola}
            controls
             />
             
        </div>
        <FaChevronCircleRight className='opacity-50 text-white cursor-pointer hover:opacity-100' onClick={slideRight} size={50} />
        </div>
</div>

<div className='mr-4 mx-auto py-16 px-4 text-center inline-block'>
        <h1 className='text-slate-800'>Why Yoga? </h1><br></br>
        <p className='py-4 px-20 h-3 text-center text-lg inline-block'> Yoga is more than a form of exercise, it is a complete science that teaches you how to handle your life with 
        more confidence, clarity of mind and happiness. There is more than postures and breathing exercises in Yoga.
        Because we feel that this science of Yoga should be known by all, we are happy to help you discover Yoga, through practice and personal experience. 

        Asanas (postures) can be practiced by all; find modifications for every body and every age. 
        Yoga benefits surpass any other physical exercise because Yoga works deeper; it revitalises all your organs and systems. 
        It works in harmony  with your own nature to help your body and mind grow stronger and know how to balance in any situation.

        Yoga is available to all; it needs no expense and no cost.</p><br></br><br></br>
        </div>
        </div>
    

  )
}

export default Yoga;