import {useState,useEffect} from 'react'
import CustomSelect from './CustomSelect'
import MovieCard from './MovieCard'
import Modal from './Modal'

const Trending = ({scrollY}) => {

    const [data,setData] = useState([])
    const [selectedOption,setSelectedOption] = useState("Movie") 
    const [modelOpen,setModelOpen] = useState(false)
    const [selectedItem,setSelectedItem] = useState(null)

    //const options = ["Movies – English","Movies – Other Languages","TV Shows – English","TV Shows – Other Languages"]
    const options = ["Movie","TV"]

    const getData = async () => {
        try{
            const respone = await fetch(`http://localhost:5001/api/v1/${selectedOption.toLocaleLowerCase()}/trending`)
            const data = await respone.json()
            setData(data.content)
        }
        catch(error){console.error(error)}
    }

    const handleModalClose = () => {
        setModelOpen(false)
        setSelectedItem(null)
    }

    useEffect(() => { getData()},[selectedOption] )

    useEffect(() => {
        if(selectedItem) {setModelOpen(true),[selectedItem]}
    })

    useEffect(() => {
        document.body.style.overflow = modelOpen ? "hidden" : "scroll"
    },[modelOpen])




    return (
        <div className='w-full py-20 relative'>
            <h3 className='text-white text-2xl font-semibold mb-4'>Trending Now</h3>
            <CustomSelect selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={options}/>
            <div className='w-full flex gap-12 overflow-scroll py-5 pl-7'>
                {data.map((item,index) => <MovieCard setSelectedItem={setSelectedItem} item={item} index={index}/>)}
            </div>

            {
                modelOpen && <Modal scrollY={scrollY} data={selectedItem} handleModalClose={handleModalClose}/>
            }


        </div>
    )
}

export default Trending