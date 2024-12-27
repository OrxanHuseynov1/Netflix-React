import React from 'react'
import Login from './login/Login'
import Landing from './landing/Landing'
const App = () => {
  return (
    <div className='bg-black max-w-[1440px] mx-auto h-full min-h-screen w-full transition duration-300 ease-in-out overflow-hidden'>
      <Landing/>
    </div>
  )
}

export default App