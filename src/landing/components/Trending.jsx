import {useState,useEffect} from 'react'
import CustomSelect from './CustomSelect'
import MovieCard from './MovieCard'
import ScrollButton from './ScrollButton'
import Modal from './Modal'

const Trending = ({ scrollY }) => {
    const [data, setData] = useState([]);
    const [selectedOption, setSelectedOption] = useState({title:"Movie",value:"movie"});
    const [modelOpen, setModelOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const options = [{title:"Movies – English",value:"movie"}, {title:"Movies – Other Languages",value:"movie"}
        , {title:"TV Shows – English",value:"tv"} , {title:"TV Shows – Other Languages",value:"tv"} 
    ];

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.toLowerCase()}/trending`);
            const data = await response.json();
            setData(data.content);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModalClose = () => {
        setModelOpen(false);
        setSelectedItem(null);
    };

    useEffect(() => {
        getData();
    }, [selectedOption]);

    useEffect(() => {
        if (selectedItem) {
            setModelOpen(true);
        }
    }, [selectedItem]);

    useEffect(() => {
        document.body.style.overflow = modelOpen ? "hidden" : "scroll";
    }, [modelOpen]);

    return (
        <div className="w-full py-20 relative">
            <h3 className="text-white text-2xl font-semibold mb-4">Trending Now</h3>
            <CustomSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options} />
            <div className="relative">
                <ScrollButton direction="left" />
                <div id="movie-card-contanier" className="w-full flex gap-12 overflow-scroll py-5 pl-7">
                    {data.map((item, index) => (
                        <MovieCard setSelectedItem={setSelectedItem} item={item} index={index} />
                    ))}
                </div>
                <ScrollButton direction="right" />
            </div>
            {modelOpen && <Modal scrollY={scrollY} data={selectedItem} handleModalClose={handleModalClose} />}
        </div>
    );
};

export default Trending;
