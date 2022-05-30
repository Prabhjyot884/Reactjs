import React from 'react'
import yogap from '../assests/Yogap.mp4'

const Yogap = () => {
  return (
    <div className='w-full h-screen relative'>
    <video
        className='w-full h-full object-cover contrast-75'
        src={yogap}
        autoPlay
        loop
        muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center py-8 text-center text-white p-4'>
            <h1 className='text-white text-6xl py-12'>YOGA</h1><br></br>
            <div className='bg-white dark:bg-transparent rounded-lg px-20 py-12 ring-1 ring-slate-900/5 shadow-xl place-content-center'>
            <p className=' text-white text-center text-xl'>Yoga is an ancient practice that involves physical poses, concentration, and deep breathing.
            <br></br> A regular yoga practice can promoteTrusted Source endurance, strength, calmness, flexibility, and well-being.
            <br>
            </br>The first mention of the word “yoga” appears in Rig Veda, a collection of ancient texts. 
            <br></br>Yoga comes from the Sanskrit word “yuj,” which means “union” or “to join.”
            <br></br> Yoga can be traced back to northern India over 5,000 years ago..</p>
            <br></br>
            
            </div>

        </div>
    </div>
  )
}

export default Yogap