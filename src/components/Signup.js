import React, { useRef, useState } from 'react'
import {GoogleButton} from 'react-google-button' 
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('');
  const passwordRef=useRef()
  const confirmPasswordRef=useRef();
  const [password, setPassword] = useState('');
  const { user, signup, googleSignIn} = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
      navigate('/yoga')
    } catch (error) {
      console.log(error)
    }
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(passwordRef.current.value !== confirmPasswordRef.current.value)
{
  return setError("password do not match");
}   

    setError('')
    try{
      await signup(email, password);
      navigate('/yoga')
    } catch (error) {
      console.log(error)
      alert('Please enter email and password')
    }
  };


  

  
  return (
    <div className='relative w-auto h-[200%] py-12 mix-blend-overlay  bg-sky-100'>
    
    <div  className=' container flex justify-center py-12 items-center h-full'>
   <form className='max-w-[480px] w-[400%] max-auto mt-12 bg-white p-8 register_form'  onSubmit= {handleSubmit}>
      <h2 className='text-4xt font-bold text-black  text-center py-4'>SignUp</h2>
          
      <div className='flex justify-between py-8'>       
         <GoogleButton className=' ml-24 content-center' onClick={handleGoogleSignIn} />
         
      </div>
       <div className=' flex flex-col mb-4'>
          
          <label className=' text-black'>Email</label>
          <input className='border relative bg-gray-100 p-2' 
          type="text" name="email" placeholder='Email' 
          onChange={(e) => setEmail(e.target.value)}  />
            </div>

            
       <div className='flex flex-col'>
          <label className=' text-black'>Password</label>
          <input className='border relative bg-gray-100 p-2'
           type='password' ref={passwordRef} placeholder='Password' name="password" 
            onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <div className='flex flex-col'>
          <label className=' text-black'> Confirm Password</label>
          <input className='border relative bg-gray-100 p-2'
           type='password' ref={confirmPasswordRef}  placeholder='Password' name="password" 
             />
            </div>
            
       <button className=' w-full py-3 mt-8 bg-indigo-400 hover:bg-indigo-300 relative text-white' type='submit'>Sign Up</button>
       <p className='flex text-black items-center'><input className=' mr-2' type="checkbox" />Remember Me</p>
       <br></br>
       <NavLink className='font-bold py-16 px-4' to={'/login'}> Already a User? Login here </NavLink>
    </form>
    
    </div>
 </div>
 

  )
}

export default Signup