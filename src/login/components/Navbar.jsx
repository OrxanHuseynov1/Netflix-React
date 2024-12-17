import React from 'react'
import NetflixLogo from '../../assets/netflixLogo.png';

const Navbar = () => {
  return (
    <header className='h-[92px]'>
        <div className='h-11'>
            <img className='w-[148px] h-[40px]' src={NetflixLogo} alt="NetflixLogo.png"/>
        </div>
    </header>
  )
}

export default Navbar