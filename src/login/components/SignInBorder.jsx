import { useState } from 'react';

const SignInBorder = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = (e) => { 
        e.stopPropagation(); 
        setIsVisible((prev) => !prev);
    };

    return (
        <div className='h-[741px]'>
            <div className='flex items-center justify-center h-screen'>

<div className='px-[68px] py-12 w-[450px] h-[741.89] bg-[#000000B3]'>
    <h1 className='text-white text-[32px] leading-9 font-bold'>Sign In</h1>
    <input className='mt-10 h-14 w-[314px] bg-transparent border rounded border-[#343534] p-2' name='email' type="email" placeholder='Email or mobile number' />
    <input className='mt-5 h-14 w-[314px] bg-transparent border rounded border-[#343534] p-2' name='password' type="password" placeholder='Password' />
    <button className='mt-5 text-white text-[16px] font-medium h-10 w-[314px] bg-[#e50914] transition-all duration-500 hover:bg-[#c11119] border rounded border-transparent'>Sign In</button>
    <p className='text-[#7c7c7b] font-medium text-base mt-4 ml-[147px]'>OR</p>
    <button className='mt-5 text-white text-[16px] font-medium h-10 w-[314px] bg-[#434343] transition-all duration-500 hover:bg-[#2f2f2f] border rounded border-transparent'>Use a Sign-In Code</button>
    <button className='mt-3 ml-[92px] text-white text-[17px] h-10 w-[140px] bg-transparent hover:underline hover:text-[#979e99]'>Forgot password?</button>
    <div className="inline-flex items-center mt-5 space-x-3">
        <input className="form-checkbox text-black h-4 w-5" type="checkbox" />
        <span className='text-white'>Remember me</span>
    </div>
    <div className='mt-3 space-x-2'>
        <span className='text-[#FFFFFFB3]'>New to Netflix?</span>
        <a href="" className='text-white font-medium hover:underline'>Sign up now.</a>
    </div>

    <div className='mt-4'>
        <span className='text-[#8C8C8C] text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
        {!isVisible && (
            <a onClick={toggleContent} className='text-[#0071EB] text-xs font-medium hover:underline cursor-pointer'>
                Learn more.
            </a>
        )}
    </div>

    <div
        className={`transition-all duration-500 ease-in-out mt-4 min-h-[60px] ${
            isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
    >
        <p className="text-[#8C8C8C] text-xs h-[106.67px] w-[292.13px]">
            The information collected by Google reCAPTCHA is subject to the Google 
            <a href="https://policies.google.com/privacy" className='text-[#0071EB] text-xs font-medium hover:underline'>Privacy Policy </a>   
            and <a href="https://policies.google.com/terms" className='text-[#0071EB] text-xs font-medium hover:underline'>Terms of Service</a>
            , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes 
            (it is not used for personalized advertising by Google).
        </p>
    </div>
</div>
</div>

        </div>
    );
};

export default SignInBorder;



// {isVisible && (
//     <div className='mt-4 text-[#8C8C8C] text-xs'>
//         <p className='h-[106.67px] w-[292.13px]'>
//             The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
//         </p>
//     </div>
// )}