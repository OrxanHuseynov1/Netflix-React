import {useState} from 'react'
import {useNavigate} from 'react-router'

const EmailInput = () => {
    const [email,setEmail] = useState('')
    const navigate = useNavigate()
    
    return (
        <div className='flex items-center h-[55px] w-[580px] mx-auto mt-5 gap-2'>
            <input className='w-full bg-transparent border-[1px] border-zinc-400 h-full px-4 rounded-[4px] text-white' value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='Enter email' />
            <button className='min-w-[200px] flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white'  onClick={() => {navigate("//",{state:{email:email}})}}>Get Started</button>
        </div>
  )
}

export default EmailInput