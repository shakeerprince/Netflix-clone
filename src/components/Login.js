import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkValidData } from '../utils/validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = ()=>{
        //validate the form data
        //checkValidData(email. password)

      const message = checkValidData(email.current.value, password.current.value)
       setErrorMessage(message)
        
        
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img
             src="https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg" 
             alt=""
             />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl text-white py-4' >{isSignInForm ? "Sign In" : "Sign Up"}  </h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700 rounded-lg' />)}
            <input ref={email} type="text" placeholder="Email or mobile number" className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input ref={password} type="password" placeholder='password' className='p-4 my-4 w-full  bg-gray-700 rounded-lg'/>
            <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ?"New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
        </form>

    </div>
  )
}

export default Login;