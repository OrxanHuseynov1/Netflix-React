import {useState,useEffect} from 'react'
import Home from './components./Home.jsx'
import Shows  from './components/Shows.jsx';
import Movies from './components/Movies.jsx';
import Navbar from './components/Navbar.jsx';
const HomePage = () => {
    const [selectedTap,setSelectedTap] = useState({title:"Home",value:"home"});
    const [trendingMovies,setTrendingMovies] = useState([]);

    const tapItems =[
        {title:"Home",value:"home"},
        {title:"TV Shows",value:"tv"},
        {title:"Movies",value:"movie"},
        {title:"New & Popular",value:"tv"},
        {title:"My List",value:"movie"},
        {title:"Browse by Languages",value:"tv"}
    ] 

    const getMovies = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/movie/trending`);
            const data = await response.json();
            if(response.ok){
                setTrendingMovies(data.content);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {getMovies()},[]); 

    const visibleTap = () => {
        switch (selectedTap.value) {
            case "movie":
                return <Movies trendingMovies={trendingMovies}/>
            case "tv":
                return <Shows/>              
            default:
                return <Home visbleMovie={trendingMovies[0]}/>
        }
    }

    return (
        <div className='relative'>
            <Navbar selectedTab={selectedTap} setSelectedTab={setSelectedTap} tapItems={tapItems}/>
            {visibleTap()}
        </div>
  )
}

export default HomePage