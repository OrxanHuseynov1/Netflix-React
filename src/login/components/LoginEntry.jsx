import React from 'react'
import SignInBorder from './SignInBorder'
import NetflixLogo from '../../assets/images/NetflixLogo.png'
import { useNavigate } from 'react-router-dom'
const LoginEntry = () => {
  const navigate = useNavigate()
  return (
    <div className='relative w-full h-screen flex items-center justify-center lg:h-[775px] px-4 md:px-[9rem] bg-cover bg-blend-overlay bg-no-repeat bg-black/50 bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/AZ-en-20241223-TRIFECTA-perspective_f236084e-fe39-4a36-b690-32b396b0a419_small.jpg")]'>
        <button onClick={navigate('/')}>
          <img className='w-[90px] md:w-[120px] lg:w-[160px] absolute top-[24px] left-[168px]' src={NetflixLogo} alt="" />
        </button>
        <SignInBorder />
    </div>
  )
}

export default LoginEntry