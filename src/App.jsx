
import React from 'react'
import Login from './login/Login'
import Landing from './landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='bg-black max-w-[1440px] mx-auto h-full min-h-screen w-full transition duration-300 ease-in-out overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App