import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiShieldUserFill } from "react-icons/ri";


export default function SignUp() {
  return (
    <div className='min-h-screen mt-10'>
      <div className='flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 backdrop-blur-sm bg-cyan-100 rounded-2xl'>
        {/* left */}
        <div className='flex-1'>
        <img src="signup.png" alt="Descriptive text" className="w-full h-auto" />

          <p className='text-md font-semibold text-cyan-700'>Discover a world of insights, ideas, and inspiration.  </p>
        </div>
        {/* right */}
        <div className='flex-1 p-7 rounded-3xl backdrop-blur-lg bg-white/40 ...'>
        <RiShieldUserFill className="text-cyan-600 text-center mx-auto h-16 w-16" />
          <form className='flex flex-col gap-4 '>
            <div className='text-lg'>
              <Label className='text-lg font-bold' value='Your Username'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div className=''>
              <Label className='text-lg font-bold' value='Your Email'/>
              <TextInput type='text' placeholder='Email' id='email'/>
            </div>
            <div className=''>
              <Label className='text-lg font-bold'value='Your Password'/>
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='greenToBlue' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5 font-semibold'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-600 font-bold'>
            Sign In</Link>
          </div>
        </div>
      </div>
      
    </div>
  )
}