import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import {GrMapLocation} from 'react-icons/gr'
import { SiGmail} from 'react-icons/si'
import Contac from '../assests/contact.png'
 
const Contact = () => {
  return (
    <div className=' bg-center bg-no-repeat' style={{backgroundImage: `url(${Contac})`}}>
      <section className="text-gray-700 py-28 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Any querries or want to contact any trainer drop the message and we will get back within 24 hours 
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder='First Name'
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder='Last name'
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder='Email'
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="integer"
                    id="name"
                    placeholder='Mobile Number'
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder='Write a message, feedback or query'
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white border-0 py-2 px-8 active:bg-violet-700 focus:outline-none focus:ring focus:ring-indigo-300 w-500px transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded text-lg">
                  Submit
                </button>
              </div>
              </div>
              </div>
          </div>
              <div className=' grid md:grid-cols-3 w-full'>
              <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl w-80 h-80 ml-32'>
          <span className=' text-slate-600 font-bold text-xl flex gap-4 uppercase px-3 py-1 ml-14 rounded-2xl'><FaPhoneAlt size={25}/> Phone Support </span>
          <div className=' py-3 content-center items-center'><br></br>
            <p className=' text-center text-xl'>India: 1800 458 DHYANA (3492)
              US/Canada: 1 854 809 48741
              WhatsApp: +91 76128 79848</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl w-80 h-80 ml-24'>
          <span className=' align-middle text-slate-600 font-bold text-xl flex gap-3 uppercase px-3 py-1 text-center rounded-2xl ml-10'> <GrMapLocation size={30}/> Location</span>
          <div className=' py-4 content-center items-center'><br></br>
            <p className=' text-center text-xl'><br></br> 432, Chandigarh, India 
            yogi center</p>
          </div>
        </div>
        <div className=' bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl w-80 h-80 ml-14'>
          <span className=' align-middle text-slate-600 font-bold text-xl text-center flex gap-3 uppercase px-3 py-1 rounded-2xl'> <SiGmail size={30}/> Mail Support</span>
          <div className=' py-4 content-center items-center'><br></br>
            <p className=' text-center text-xl'> <br></br> Yogamedi@gmail.com </p>
          </div>
        </div>
        
          
        </div>
      </section>
      
    </div>
  )
}

export default Contact