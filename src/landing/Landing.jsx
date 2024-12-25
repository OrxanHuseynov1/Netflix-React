import {useState , useEffect} from 'react'
import Entry from './components/Entry'
import Trending from './components/Trending'
import ReasonsToJoin from './components/ReasonsToJoin'

const Landing = () => {

    const [scrollY,setScrollY] = useState(0)

    const handleScroll = () => {setScrollY(window.scrollY);};

    useEffect(() => {window.addEventListener('scroll',handleScroll)
        return () => {window.removeEventListener('scroll',handleScroll)}
    },[]);

    return (
        <div id='landing' className={'w-full relative'}>
            <Entry/>
            <div className='w-full px-[144px] relative'>
                <Trending scrollY={scrollY}/>
                <ReasonsToJoin/>
            </div>
        </div>
  )
}

export default Landing