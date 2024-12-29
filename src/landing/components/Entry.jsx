import {useEffect,useState} from 'react'
import Navbar from './Navbar'
import EmailInput from './EmailInput'
const Entry = () => {

  return (
    <div className='w-full  h-screen px-[9rem] bg-cover bg-blend-overlay bg-no-repeat bg-black/70 bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/AZ-en-20241216-TRIFECTA-perspective_90a8f7dc-67cc-4d07-b0c9-4f2aed27f1cc_large.jpg")]'>
        
        <Navbar/>
        <div className='w-[580px] h-fit mx-auto pt-[180px]'>
            <h1 className='font-bold text-[60px] text-white leading-[65px] text-center'>Unlimited movies, TV shows, and more</h1>
            <p className='text-white font-semibold text-[20px] text-center mt-5'>Starts at EUR 7.99. Cancel anytime.</p>
        </div>
        <EmailInput witdhInput={580}/>
    </div>
  )
}

export default Entry