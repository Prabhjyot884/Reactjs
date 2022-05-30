import React, {useState} from 'react'
import {GoogleButton} from 'react-google-button'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, logIn, googleSignIn} = UserAuth();
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
    setError('')
    try {
      await logIn(email, password);
      navigate("/yoga")
    } catch (error) {
      console.log(error);
      alert(error.message)
    }
  }


  return (

   <div className='relative w-auto h-[120%] py-20 bg-sky-100/70'>
   
   <div  className=' container flex justify-center py-12 items-center h-full'>
   <form className='max-w-[500px] w-[200%] max-auto mt-20  bg-white p-8 login_form'  onSubmit= {handleSubmit}>
      <h2 className='text-4xt font-bold text-black  text-center py-4'>Login</h2>
      {error ? <p className='p-3 bg-red-300 my-2'>{error}</p> : null}
      <div className='flex justify-between py-8'>
         <GoogleButton className=' ml-24 content-center' onClick={handleGoogleSignIn} />
      </div>
      <div className='flex flex-col mb-4'>
         <label className=' text-black'>Email</label>
         <input className='border relative bg-gray-100 p-2' 
         name='email' placeholder='Email' type="text"
         onChange={(e) => setEmail(e.target.value)} />
         
      </div>
      <div className='flex flex-col'>
         <label className=' text-black'>Password</label>
         <input className='border relative bg-gray-100 p-2' 
         type='password'  placeholder='Password' name="password"
         onChange={(e) => setPassword(e.target.value)} />
           </div>
      <button className=' w-full py-3 mt-8 bg-indigo-400 hover:bg-indigo-300 relative text-white'>Login</button>
      <p className='flex text-black items-center'><input className=' mr-2' type="checkbox" />Remember Me</p>
      <p className=' text-center text-black mt-8'>Not a member? </p><br></br>
      Click here!!!
      <NavLink className=' btn-hover text-center items-center font-bold py-3 px-4' to={"/signup"}>  For Sign up</NavLink> 
   </form>
   
</div>
</div>

  );
}



export default Login