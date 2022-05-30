import React from 'react';

import pexels from "../assests/pexels.mp4";


const Hero = () => {
  

  return (
    <div className='w-full h-screen relative'>
    <video
        className='w-full h-full object-cover contrast-75'
        src={pexels}
        autoPlay
        loop
        muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className='text-white transition-transform font-extralight text-7xl'>WELCOME</h1><br></br>
            <h2 className=' font-[Cinzel] '>YOGA.  MEDITATION.  MUSIC.  CALM.  RELAXATION</h2><br></br>
                
        </div>
    </div>
  )
}

export default Hero;