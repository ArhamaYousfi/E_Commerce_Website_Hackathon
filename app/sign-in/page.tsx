import React from 'react'
import Link from 'next/link'
import { SiNike } from "react-icons/si";


const page = () => {
  return (
  <div className="lg:min-h-screen flex  sm:justify-center">
    <div className="max-w-md w-full bg-white rounded-lg p-6">
     
       <SiNike className='w-14 h-14 ml-40 mb-8'/>
    
      <h2 className="text-center text-xl font-bold text-gray-800 w-48 ml-20 mb-4">
      YOUR ACCOUNT FOR EVERYTHING NIKE
      </h2>
      <form action="">
      <div className="space-y-4">
            
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                required
              />
  
            
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                required
              />
              <div className='flex  justify-between'>
                <div className='flex'>
              <input
                  type="checkbox"
                  className="form-checkbox focus:ring-black focus:border-black"
                /> 
                 <p className="ml-2  text-gray-600">
                keep me signed in
                </p>
                </div>
                
                <p>Forgotten your password?</p>
                
              </div>
              <p className=" text-gray-500 mt-4">
              By logging in, you agree to Nike's{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>
              .
            </p>
  
            <button
              type="submit"
              className="w-full bg-black text-white text-sm font-semibold py-3 uppercase mt-6 hover:bg-gray-800"
            >
             Sign in
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Not a Member?{" "}
            <Link href="/join-us" className='underline font-bold'>Join Us</Link>
            </p>
              </div>
      </form>
   
      
    </div>
    </div>
  )
}

export default page