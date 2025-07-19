import { IoGameControllerSharp } from 'react-icons/io5'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <Link to="/" className='flex items-center  gap-2.5 '>
      <div className='w-8 h-8 text-xl flex items-center text-purple-500 justify-center bg-purple-500/30 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm flex-none'>
        <IoGameControllerSharp />
      </div>
      <p className=' md:break-all text-base  font-semibold'><span className='text-purple-500  text-xl'>Q</span>uantum<span className='text-purple-500 text-xl'>P</span>lay</p>
    </Link>
  )
}

export default Logo