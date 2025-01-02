import {useState} from 'react'

const Shows = () => {
    const [trendingShows,setTrendingShows] = useState([]);

    const getShows = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/tv/trending`);
            const data = await response.json();
            if(response.ok){
                setTrendingShows(data.content);
            }
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <div>Shows</div>
  )
}

export default Shows