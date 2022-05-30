import React, { useState} from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";




const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
        const handleClick = () => {
            setNav(!nav);
            setLogo(!logo)
        }
        const { user, logOut} = UserAuth()
        const navigate = useNavigate()
    //console.log(user.name)
    const handleLogout = async () => {
        try{
            await logOut()
            navigate('/')
        } catch(error) {
            console.log(error)
        }
    }
        
  return (
    <div className="flex w-full justify-between items-center h-20 px-10 absolute z-10 text-white">
            <div className='flex items-center'>
                <h1 onClick={handleClick} className= {logo ? 'hidden' : 'block'} >Calmness</h1>
            </div>
            <ul className="hidden md:flex font-bold ">
                <li>
                    <Link to="/" className=" hover:underline shadow-md rounded-md px-3 py-2 font-medium">Home</Link>
                </li>
                <li>
                    <Link to="/yoga" className=" hover:underline shadow-md rounded-md px-3 py-2 font-medium">Yoga</Link>
                </li>
                <li>
                    <Link to="/meditation" className=" hover:underline shadow-md rounded-md px-3 py-2 font-medium">Meditation</Link>
                </li>
                <li>
                    <Link to="/about" className=" hover:underline shadow-md rounded-md px-3 py-2 font-medium">About</Link>
                </li>
                <li>
                    <Link to="/contact" className=" hover:underline shadow-md rounded-md px-3 py-2 font-medium">Contact</Link>
                </li>
                </ul>
                {user?.email ? (
                    <div className=" flex  gap-8 py-5 ">
                  <p className="font-[Satisfy] text-4xl dark:text-slate-900"> Welcome!!!! </p> 
                
                  <button onClick={handleLogout}>Logout</button>
                    </div>
                ) :(
                <div className=" flex gap-5 py-5">
                  <button>  <Link to="/login" className=" font-[Satisfy] text-xl hover:underline px-3 py-2 font-medium">Login</Link>
                  </button>
                  <button>
                    <Link to="/signup" className=" font-[Satisfy] text-xl font-medium hover:underline px-3 py-2">Signup</Link>
                    </button>
                    </div>
                 )}
            
            
            
    <div className='md:hidden' onClick={handleClick}>
    {!nav ? <MenuIcon className='w-8 stroke-slate-900' /> : <XIcon className='w-8 stroke-slate-700' />}
    
    </div>
    {/* Mobile menu Dropdown */}
    <div onClick={handleClick} className={nav ? 'absolute text-black left-0 top-0 w-full bg-slate-100/60 px-4 py-7 flex flex-col' : 'absolute left-[-100%]' }>
        <ul >
            <h1>YOGA</h1>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/yoga">Yoga</Link>
                </li>
                <li>
                    <Link to="/meditation">Meditation</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>  
                <li>
                    <Link to="/login">Login</Link>
                </li>  
                <li>
                    <Link to="/signup">Signup</Link>
                </li>  
                
                <div className="flex justify-between my-6">
                    <FaFacebook className="icons" />
                    <FaTwitter className="icons" />
                    <FaYoutube className="icons" />
                    <FaInstagram className="icons" />
                </div>
        </ul>
    </div>
    </div>
  )
}

export default Navbar;