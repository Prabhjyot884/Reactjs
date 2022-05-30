import React from 'react'
import about from '../assests/about.mp4'

const Medita = () => {
  return (
    <div className='w-full h-screen relative'>
    <video
        className='w-full h-full object-cover contrast-75'
        src={about}
        autoPlay
        loop
        muted
        />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
            <h1 className='text-white text-6xl mt-5'>MEDITATION</h1><br></br>
            <p className=' text-white text-center text-xl'>Meditation can be defined as a set of techniques that are intended to<br></br> 
            encourage a heightened state of awareness and focused attention. 
            <br>
            </br>Meditation is also a consciousness-changing technique that has been 
            <br></br>shown to have a wide number of benefits on psychological well-being.</p>
            <br></br>
            <ul className=' text-lg text-white text-center'>
              <li className=' text-white'>
              Meditation has been practiced in cultures all over the world for thousands of years.<br></br>
              Meditation can also be used as a psychotherapeutic technique.
              </li>
              <li className=' text-white'>
              Nearly every religion, including Buddhism, Hinduism, Christianity, <br></br>Judaism, and Islam, has a tradition of using meditative practices.
              </li>
              <li className=' text-white'>
              While meditation is often used for religious purposes, many people <br></br>practice it independently of any religious or spiritual beliefs or practices.
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Medita