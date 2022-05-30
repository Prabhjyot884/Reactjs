import React from 'react';
import medita from '../assests/production.mp4';

const Medi = () => {
  return (
    <div className='w-full bg-slate-100/90 rounded-3xl py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <video className='w-[900px] h-[560px] justify-center mx-auto my-4' src={medita} 
      autoPlay 
      loop 
        muted
      />
      <div>
       <h1 className='px-10 py-3 mr-10 text-slate-800'>MEDITATION</h1>
       <br></br>
       <p className='px-10 py-1 mr-10'>
       Meditation is a practice in which an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.<br></br>
       Meditation is practiced in numerous religious traditions. The earliest records of meditation (dhyana) are found in the Upanishads of Hindu philosophy, and meditation plays a salient role in the contemplative repertoire of Buddhism and Hinduism.<br></br>
       Since the 19th century, Asian meditative techniques have spread to other cultures where they have also found application in non-spiritual contexts, such as business and health.<br></br>
       Meditation may significantly reduce stress, anxiety, depression, and pain,and enhance peace, perception, self-concept, and well-being.Research is ongoing to better understand the effects of meditation on health (psychological, neurological, and cardiovascular) and other areas.
       </p>
      </div>
   </div>
   </div> 

  )
}

export default Medi