import React from 'react'
import ReactPlayer from 'react-player'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import calm from '../assests/calm.jpg'
import Yogap from './Yogap';


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
    <div>
    <Yogap />
    <div className=' justify-center py-36 bg-gradient-to-r from-orange-100 to-pink-100' >
      <div className=' flex-col justify-center w-[1060px] text-center mx-auto grid md:grid-cols-2 grid-rows-none dark:bg-orange-900/50 '>
      
      <div>
       <h1 className='px-8 py-3 mr-10 text-white text-center'>YOGA</h1>
       
       <ul className='px-6 mr-4 list-disc text-lg text-white '>
       <li className=' text-white font-medium'>Yoga is a great form of exercise for people of all ages and physical abilities.</li>
       <li className=' text-white font-medium'> Beginner yoga poses include child's pose, easy seat, tree pose, and down dog. </li>
       <li className=' text-white font-medium'>Benefits of yoga for beginners include increased strength and flexibility and reduced stress.  </li>
       </ul>
      </div>
      <img className='w-[500px] py-8 px-9 h-96 ' src={calm} alt='/'/>
      </div>
      
      <div className=' mt-[120px]'>
      
      <div class="bg-white dark:bg-orange-900/50   px-2 py-6 shadow-xl">
      <h1 className=' text-center py-3 text-white font-light'> Beginner Level</h1>
        <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 text-white cursor-pointer hover:opacity-100'  onClick={slideLeft} size={50} />
        <div id='slider' className=' player-wrapper w-full h-full grid grid-cols-5 grid-rows-none content-evenly place-content-evenly overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-center snap-proximity'>
        
          <ReactPlayer  
          url={['https://www.youtube.com/watch?v=zqwK6J3yHfA' ,
          'https://www.youtube.com/watch?v=3_VnMj_h8IQ']} 
          width='500px'
           controls/>
          <br></br>
          <ReactPlayer url={'https://www.youtube.com/watch?v=d8QqXLV3tWM&t=3s'}
          width='500px' controls />
          <br></br>
          <ReactPlayer url={'https://www.youtube.com/watch?v=jbHnwZgZnHU'}
          width='500px' controls/>
        </div>
        <MdChevronRight className='opacity-50 text-white cursor-pointer hover:opacity-100' onClick={slideRight} size={50} />
        </div>
</div>
<div className=' py-14'>
<div class="bg-white dark:bg-orange-900/50  px-2 py-6 shadow-xl">
      <h1 className=' text-center py-3 text-white font-light'>Intermediate Level</h1>
        <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 text-white cursor-pointer hover:opacity-100'  onClick={slideLeft} size={50} />
        <div id='slider' className=' player-wrapper w-full h-full grid grid-cols-5 grid-rows-none content-evenly place-content-evenly overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-center snap-proximity'>
        
          <ReactPlayer  
          url={'https://www.youtube.com/watch?v=tJ3gqJC4ZJ8'} 
          width='500px'
           controls/>
          <br></br>
          <ReactPlayer url={'https://www.youtube.com/watch?v=bp77kgtvQ7M'}
          width='500px' controls />
          <br></br>
          <ReactPlayer url={'hhttps://www.youtube.com/watch?v=XhTHT0M9aK0'}
          width='500px' controls/>
        </div>
        <MdChevronRight className='opacity-50 text-white cursor-pointer hover:opacity-100' onClick={slideRight} size={50} />
        </div>
        </div>
      </div>
<div className=' py-14'>
<div class="bg-white dark:bg-orange-900/50  px-2 py-6 shadow-xl">
      <h1 className=' text-center py-3 text-white font-light'>Advance Level</h1>
        <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 text-white cursor-pointer hover:opacity-100'  onClick={slideLeft} size={50} />
        <div id='slider' className=' player-wrapper w-full h-full grid grid-cols-5 grid-rows-none content-evenly place-content-evenly overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide snap-center snap-proximity'>
        
          <ReactPlayer  
          url={'https://www.youtube.com/watch?v=fvlszZA-r1Y'} 
          width='500px'
           controls/>
          <br></br>
          <ReactPlayer url={'https://www.youtube.com/watch?v=EmKL25X95I0'}
          width='500px' controls />
          <br></br>
          <ReactPlayer url={'https://www.youtube.com/watch?v=3JN_FfhDApwU'}
          width='500px' controls/>
        </div>
        <MdChevronRight className='opacity-50 text-white cursor-pointer hover:opacity-100' onClick={slideRight} size={50} />
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Yoga