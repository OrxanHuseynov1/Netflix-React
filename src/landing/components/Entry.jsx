import {useEffect,useState} from 'react'
import Navbar from './Navbar'
import Ellips from './Ellips';

const Entry = () => {

  const [email, setEmail] = useState("");
  const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

  return (
    <div className='w-full h-full px-[9rem] bg-cover bg-blend-overlay bg-no-repeat bg-black/70 bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/AZ-en-20241216-TRIFECTA-perspective_90a8f7dc-67cc-4d07-b0c9-4f2aed27f1cc_large.jpg")]'>
        
        <Navbar/>
        <div className='w-[580px] h-fit mx-auto pt-[150px]'>
            <h1 className='font-bold text-[60px] text-white leading-[65px] text-center'>Unlimited movies, TV shows, and more</h1>
            <p className='text-white font-semibold text-[20px] text-center mt-5'>Starts at EUR 7.99. Cancel anytime.</p>
            <p className='text-white font-regular text-base text-center mt-7'>Ready to watch? Enter your email to create or restart your membership.</p>

          <form className='flex flex-col md:flex-row gap-2 ' onSubmit={handleFormSubmit}>
            <input
              type='email'
              placeholder='Email address'
              className='p-2 h-14 rounded text-white flex-1 bg-black/80 border-[1px] border-gray-600'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='bg-[#E50914] hover:bg-[#ce272ffb] transition duration-100 ease-in text-lg text-white lg:text-2xl font-semibold px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
              Get Started
              <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg>
            </button>
				  </form>
        </div>

        <Ellips/>
    </div>
  )
}

export default Entry