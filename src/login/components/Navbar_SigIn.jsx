import { useNavigate } from "react-router-dom"
import NetflixLogo from '../../assets/images/NetflixLogo.png'

const Navbar_SigIn = () => {
    const navigate = useNavigate()
  return (
    <button onClick={navigate('/')}>
        <img className='w-[90px] md:w-[120px] lg:w-[160px] absolute top-[24px] left-[168px]' src={NetflixLogo} alt="" />
    </button>
  )
}

export default Navbar_SigIn