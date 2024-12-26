import {useState} from 'react'
import CustomSelect from './CustomSelect'
import language from '../../assets/icons/language.svg'

const Navbar = () => {
    const [selectedLanguage,setSelectedLanguage] = useState("English")

    const Languages = ["English","Russian"]
  return (
    <div className='flex items-center justify-between pt-5'>
        <img className='w-[160px]' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix.png" />
        <div className='flex items-center gap-2 h-[33px]'>
          <CustomSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} options={Languages} logo={<img src={language}></img>}/>
          <a className='bg-[rgb(229,9,20)]  hover:bg-[#ce272ffb] transition duration-100 ease-in px-4 h-full text-white text-sm py-[6px]  font-bold rounded-[4px]' href="">Sign In</a>
        </div>
   </div>
  )
}

export default Navbar