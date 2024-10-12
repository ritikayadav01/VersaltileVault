import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { RiShieldUserFill } from "react-icons/ri";
import OAuth from '../components/OAuth';


export default function SignUp() {
  const Navigate=useNavigate()
  const [formData, setformData] = useState({})
  const [errorMessage, seterrorMessage] = useState(null)
  const [loading, setloading] = useState(false)
  
  const handleChange=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value.trim()})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password)
    {
      return seterrorMessage('Please fill the out all the fields')
    }
    try {
      setloading(true);
      seterrorMessage(null);
      const res=await fetch('/api/auth/signup',{
        method:'POST',
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify(formData),
      })
      const data=await res.json();
      if(data.success===false)
      {
        return seterrorMessage(data.message)
      }
      setloading(false);
      if(res.ok)
      {
        Navigate('/sign-in');
      }
    } catch (error) {
      seterrorMessage(error.message);
      setloading(false);
    }

  }

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
          <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
            <div className='text-lg'>
              <Label className='text-lg font-bold' value='Your Username'/>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>
            <div className=''>
              <Label className='text-lg font-bold' value='Your Email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>
            <div className=''>
              <Label className='text-lg font-bold'value='Your Password'/>
              <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='greenToBlue' type='submit' disabled={loading}>
              {
                loading ?(
                  <>
                <Spinner size='sm'/>
                  <span className='pl-3'> Loading...</span>
                  </>
                ):
                'Sign Up'
              }
            </Button>
            <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5 font-semibold'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-600 font-bold'>
            Sign In</Link>
          </div>
          {
            errorMessage &&(
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
              
            
          }
        </div>
      </div>
      
    </div>
  )
}