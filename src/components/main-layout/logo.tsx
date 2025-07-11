import { IoGameControllerSharp } from 'react-icons/io5'

const Logo = () => {
  return (
    <div className='flex items-center  gap-2.5 p-4'>
      <div className='w-8 h-8 text-xl flex items-center text-purple-500 justify-center bg-purple-500/30 rounded-tr-lg rounded-bl-lg rounded-tl-sm rounded-br-sm flex-none'>
        <IoGameControllerSharp />
      </div>
      <p className=' break-all text-lg  font-semibold'><span className='text-purple-500 text-xl'>Q</span>uantum<span className='text-purple-500 text-xl'>P</span>lay</p>
    </div>
  )
}

export default Logo