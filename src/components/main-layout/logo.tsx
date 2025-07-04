import { IoGameControllerSharp } from 'react-icons/io5'

const Logo = () => {
  return (
    <div className='flex items-center  gap-2.5 px-6 py-4'>
      <div className='w-12 h-12 text-3xl flex items-center text-purple-500 justify-center bg-purple-500/30 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm flex-none'>
        <IoGameControllerSharp />
      </div>
      <p className='flex-1 text-xl font-semibold'><span className='text-purple-500 text-2xl'>Q</span>uantum<span className='text-purple-500 text-2xl'>P</span>lay</p>
    </div>
  )
}

export default Logo