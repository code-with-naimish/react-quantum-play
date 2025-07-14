
import { FaGithub } from 'react-icons/fa'
import './App.css'
import Logo from './components/main-layout/logo'
import SideNav from './components/main-layout/side-nav'
import RootNavs from './components/root-navs'
import { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { RiMenu4Fill } from 'react-icons/ri'

const App = () => {
  const year = new Date().getFullYear();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleAside = () => {
    setShowSidebar(prev => !prev)
  }



  return (
    <div className='grid md:grid-cols-12 grid-cols-1   overflow-hidden  bg-black text-white h-screen'>

      <aside className={`md:col-span-2 flex flex-col overflow-hidden border-r border-purple-500/20
      md:h-auto h-screen md:overflow-y-hidden overflow-y-auto
         bg-black  z-50 md:static fixed md:bg-transparent md:z-auto transition-all
         md:w-auto w-full
       ${showSidebar ? "md:translate-x-0 -translate-x-full   " : "md:translate-x-0"}
        `}>
        <button onClick={toggleAside} className='text-lg absolute top-4 right-3 md:hidden block'>
          <MdOutlineClose />
        </button>
        <div className='p-4'>
          <Logo />
        </div>



        <div className=' flex-1 overflow-y-auto overflow-x-hidden'>
          <SideNav />
        </div>
      </aside>

      <div className='md:col-span-10 flex flex-col overflow-hidden'>
        <header className='border-b  border-purple-500/20 px-6 py-3 flex justify-between items-center gap-6'>
          <div className='md:hidden flex items-center justify-between w-full gap-4'>
            <div>
              <Logo />

            </div>
            <button onClick={toggleAside} className='flex-none cursor-pointer flex items-center   text-xl justify-center w-10 h-10 rounded-lg  bg-purple-500/10 text-purple-500'><RiMenu4Fill /></button>

          </div>
          <div className='md:block hidden'>
            <h1 className=' text-xl gradient-text font-semibold  '>Welcome</h1>

          </div>
          <a href="https://github.com/code-with-naimish" target='_blank' className='md:flex hidden items-center flex-none  text-xl justify-center w-10 h-10 rounded-full  border border-purple-500/20'>
            <FaGithub /></a>
        </header>
        <main className=' flex-1 overflow-y-auto overflow-x-hidden p-5'>
          <RootNavs />
        </main>
        <footer className='border-t  border-purple-500/20 p-4 text-white/70 text-sm  text-center'>
          <p>&copy; {year} Designed & developed by <a className='text-white cursor-pointer hover:underline transition-all' href="https://github.com/code-with-naimish" target='_blank'>Naimish</a> with React.js Tailwind CSS & <a className='text-white cursor-pointer hover:underline transition-all' href="https://www.freetogame.com/api-doc" target='_blank'>FreeToGame API</a>  </p>
        </footer>
      </div>
    </div>

  )
}

export default App