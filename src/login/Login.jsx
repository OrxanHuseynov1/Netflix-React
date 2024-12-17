import React from 'react'
import Navbar from './components/Navbar';
import SignInBorder from './components/SignInBorder';
import NetflixLogo from '../assets/netflixLogo.png';
const Login = () => {

  return (
    <>
      <div>
        <div className='h-[729.6px]  bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_small.jpg")]'>
        <Navbar/>
        <SignInBorder/>
        
        </div>

      </div>

    </>




    // <div className='bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_small.jpg")]'>
    //     <img className='w-[148px] h-[40px] '
    //         src={NetflixLogo}
    //         alt="NetflixLogo.png"
    //     />
    //     <SignInBorder/>
    // </div>


  )
}

export default Login