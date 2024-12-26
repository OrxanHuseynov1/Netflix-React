
import {useState , useEffect} from 'react'
import Entry from './components/Entry'
import Ellips from './components/Ellips'
import Trending from './components/Trending'
import ReasonsToJoin from './components/ReasonsToJoin'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const Landing = () => {

    const [scrollY,setScrollY] = useState(0)

    const handleScroll = () => {setScrollY(window.scrollY);};

    useEffect(() => {window.addEventListener('scroll',handleScroll)
        return () => {window.removeEventListener('scroll',handleScroll)}
    },[]);

    return (
        <div id='landing' className={'w-full relative'}>
            <Entry/>
            <Ellips/>
            <div className='w-full px-[144px] relative mb-20'>
                <Trending scrollY={scrollY}/>
                <ReasonsToJoin/>
                <FAQ/>
                <Footer/>
            </div>
        </div>
  )
}

export default Landing