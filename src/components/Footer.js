import React from 'react';
import {
    FaFacebookSquare,
    FaPinterest,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaWhatsapp
   } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1680px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-5 bg-gradient-to-r from-stone-700 to-gray-700'>
        <div>
            <h1 className='w-full text-3xl font-semibold text-white'>Calmness</h1>
            <p className='py-4 text-white'>Stay motivated with our guided programs including yoga for beginners, 30 day challenges, meditation courses, Yin yoga programs and deeper dives into yoga topics.</p>
            <div className='flex justify-between md:w-[70%] my-6'>
                <FaFacebookSquare className='text-white' size={25} />
                <FaInstagram className='text-white' size={25} />
                <FaPinterest className='text-white' size={25} />
                <FaTwitter className='text-white' size={25} />
                
                <FaLinkedin className='text-white' size={25} />
                <FaWhatsapp className='text-white' size={25} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
<div>
 <h6 className='font-medium py-2 px-6 text-white'>Menu</h6>
 <ul className='text-white'>
    <li className='py-2 text-sm text-white'>Magazine</li>
    <li className='py-2 text-sm text-white'>Practice</li>
    <li className='py-2 text-sm text-white'>Programs</li>
    <li className='py-2 text-sm text-white'>Try for free</li>
 </ul>
</div>
<div>
 <h6 className='font-medium px-6 py-2 text-white'>Connect</h6>
 <ul className='text-white'>
    <li className='py-2 text-sm text-white'>Teachers</li>
    <li className='py-2 text-sm text-white'>Workshops</li>
    <li className='py-2 text-sm text-white'>NewsLetter Signup</li>
    <li className='py-2 text-sm text-white'>Events</li>
 </ul>
</div>
<div>
<h6 className='font-medium py-2 px-6 text-white'>Support</h6>
<ul className='text-white'>
    <li className='py-2 text-sm text-white'>Gifts</li>
    <li className='py-2 text-sm text-white'>Blog</li>
    <li className='py-2 text-sm text-white'>Contact</li>
</ul>
</div>
<div>
<h6 className='font-medium py-2 px-6 text-white'>About</h6>
<ul className='text-white'>
   <li className='py-2 text-sm text-white'>About Us</li>
    <li className='py-2 text-sm text-white'>Policy</li>
    <li className='py-2 text-sm text-white'>Terms</li>
</ul>
</div>
</div>
</div>
  )
}

export default Footer